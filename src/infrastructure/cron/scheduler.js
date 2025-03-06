const cron = require('node-cron');
const syncAssetsService = require('../../application/SyncAssetsService');

// Schedule the job to run once a day at midnight (0 0 * * *)
cron.schedule('0 0 * * *', async () => {
  try {
    console.log('Cron Job Started: Syncing assets...');
    await syncAssetsService.execute();
    console.log('Asset synchronization completed successfully.');
  } catch (error) {
    console.error('Error during asset sync:', error);
  }
});
