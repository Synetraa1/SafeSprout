// server/utils/sendDueCareEmails.js
// Script to send email notifications for due care tasks
const mongoose = require('mongoose');
const UserPlant = require('../models/UserPlant');
const Plant = require('../models/Plant');
const { getDueCareTasks } = require('./careScheduler');
const { sendCareNotification } = require('./emailer');

const User = mongoose.model('User', new mongoose.Schema({
  name: String,
  email: String,
}));

async function sendDueCareEmails() {
  // Connect to DB if not already
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  // Find all user plants
  const userPlants = await UserPlant.find({}).lean();
  if (!userPlants.length) return;
  // Fetch all plant info
  const plantIds = userPlants.map(up => up.plantId);
  const plants = await Plant.find({ _id: { $in: plantIds } }).lean();
  const plantMap = Object.fromEntries(plants.map(p => [p._id.toString(), p]));
  // Fetch all users
  const userIds = [...new Set(userPlants.map(up => up.user?.toString()))];
  const users = await User.find({ _id: { $in: userIds } });
  const userMap = Object.fromEntries(users.map(u => [u._id.toString(), u]));
  // Group plants by user
  const plantsByUser = {};
  userPlants.forEach(up => {
    if (!plantsByUser[up.user]) plantsByUser[up.user] = [];
    plantsByUser[up.user].push(up);
  });
  // For each user, send email if any due tasks
  for (const userId of Object.keys(plantsByUser)) {
    const user = userMap[userId];
    if (!user || !user.email) continue;
    const dueTasks = plantsByUser[userId].flatMap(up => {
      const plantInfo = plantMap[up.plantId.toString()];
      const due = getDueCareTasks(up, plantInfo);
      return due.map(task => ({
        plant: plantInfo?.name || '',
        nickname: up.nickname,
        task,
      }));
    });
    if (dueTasks.length) {
      const subject = 'Your SafeSprout Plant Care Reminders';
      const text = dueTasks.map(dt => `Plant: ${dt.nickname || dt.plant}\nTask: ${dt.task}`).join('\n');
      await sendCareNotification({
        to: user.email,
        subject,
        text,
      });
    }
  }
}

if (require.main === module) {
  sendDueCareEmails().then(() => {
    console.log('Due care emails sent.');
    process.exit(0);
  }).catch(err => {
    console.error('Error sending care emails:', err);
    process.exit(1);
  });
}

module.exports = { sendDueCareEmails };
