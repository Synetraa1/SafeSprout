// server/routes/notifications.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const UserPlant = require('../models/UserPlant');
const Plant = require('../models/Plant');
const { getDueCareTasks } = require('../utils/careScheduler');

// Get due care notifications for a user (in-app)
router.get('/due', async (req, res) => {
  try {
    // TODO: Replace with real user ID from auth middleware
    const userId = req.query.userId;
    if (!userId) return res.status(400).json({ success: false, message: 'Missing userId' });

    // Find all user plants for this user
    const userPlants = await UserPlant.find({ user: mongoose.Types.ObjectId(userId) }).lean();
    if (!userPlants.length) return res.json({ success: true, notifications: [] });

    // Fetch all plant info in one go
    const plantIds = userPlants.map(up => up.plantId);
    const plants = await Plant.find({ _id: { $in: plantIds } }).lean();
    const plantMap = Object.fromEntries(plants.map(p => [p._id.toString(), p]));

    // Build notifications
    const notifications = userPlants.flatMap(up => {
      const plantInfo = plantMap[up.plantId.toString()];
      const dueTasks = getDueCareTasks(up, plantInfo);
      return dueTasks.map(task => ({
        plantId: up.plantId,
        nickname: up.nickname,
        task,
        due: true,
        plantName: plantInfo?.name || '',
      }));
    });
    res.json({ success: true, notifications });
  } catch (err) {
    console.error('Error fetching notifications:', err);
    res.status(500).json({ success: false, message: 'Error fetching notifications' });
  }
});

module.exports = router;
