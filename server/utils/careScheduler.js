// server/utils/careScheduler.js
// Utility to determine due care tasks for a user plant

const MS_PER_DAY = 24 * 60 * 60 * 1000;

// Map care frequency string to days (customize as needed)
const frequencyToDays = {
  'Frequent': 2, // every 2 days
  'Average': 7,  // every 7 days
  'Minimum': 21, // every 21 days
};

// Fertilizing: default every 60 days (can be customized per plant)
const DEFAULT_FERTILIZE_DAYS = 60;
// Repotting: default every 365 days (can be customized per plant)
const DEFAULT_REPOT_DAYS = 365;

function daysSince(date) {
  if (!date) return Infinity;
  return Math.floor((Date.now() - new Date(date).getTime()) / MS_PER_DAY);
}

function getDueCareTasks(userPlant, plantInfo) {
  const dueTasks = [];
  // Watering
  const freq = plantInfo?.watering || plantInfo?.careInstructions?.water?.frequency || 'Average';
  const waterDays = frequencyToDays[freq] || 7;
  if (daysSince(userPlant.lastWatered) >= waterDays) {
    dueTasks.push('water');
  }
  // Fertilizing
  if (daysSince(userPlant.lastFertilized) >= DEFAULT_FERTILIZE_DAYS) {
    dueTasks.push('fertilize');
  }
  // Repotting (optional, based on acquiredDate)
  if (daysSince(userPlant.acquiredDate) >= DEFAULT_REPOT_DAYS) {
    dueTasks.push('repot');
  }
  return dueTasks;
}

module.exports = { getDueCareTasks };
