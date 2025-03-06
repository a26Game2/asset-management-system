const assetApiClient = require('../infrastructure/api/assetApiClient');
const db = require('../infrastructure/db/database');
const Asset = require('../domain/Asset');

class SyncAssetsService {
  async execute() {
    console.log('Starting asset synchronization...');
    let assetsData;
    try {
      assetsData = await assetApiClient.fetchAssets();
    } catch (error) {
      console.error('Asset sync aborted due to API error:', error.message);
      return;
    }

    // Get IDs of active locations from the database
    const activeLocationIds = await db.getActiveLocations();
    const validAssets = [];
    console.log(activeLocationIds, 'activeLocationIds');

    assetsData.forEach(data => {
      if (
        activeLocationIds.includes(data.location_id) &&
        data.created_at * 1000 < Date.now()
      ) {
        validAssets.push(new Asset({
          id: data.id,
          type: data.type,
          serial: data.serial,
          status: data.status,
          description: data.description,
          createdAt: data.created_at,
          updatedAt: data.updated_at,
          locationId: data.location_id
        }));
      }
    });

    // Use a transaction to upsert each asset in the database
    try {
      await db.transaction(async trx => {
        for (const asset of validAssets) {
          await db.saveAsset(asset, trx);
        }
      });
      console.log(`Synced ${validAssets.length} assets.`);
    } catch (error) {
      console.error('Error during database transaction:', error.message);
      // Optionally, handle rollback or retry logic here
    }
  }
}

module.exports = new SyncAssetsService();
