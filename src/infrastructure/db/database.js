const knex = require('knex');
require('dotenv').config();

const environment = 'development'; // or process.env.NODE_ENV if defined
const config = require('../../../knexfile')[environment];

const db = knex(config);

// Run migrations automatically on startup
db.migrate.latest()
  .then(() => console.log('Migrations are finished.'))
  .catch(err => console.error('Migration error:', err));

module.exports = {
  // Returns an array of active location IDs
  getActiveLocations: async function () {
    const locations = await db('locations').where({ status: 'active' }).select('id');
    return locations.map(loc => loc.id);
  },
  // Upsert asset using its id as the primary key
  saveAsset: async function (asset, trx) {
    const exists = await db('assets').where({ id: asset.id }).first().transacting(trx);
    if (exists) {
      return db('assets')
        .where({ id: asset.id })
        .update({
          type: asset.type,
          serial: asset.serial,
          status: asset.status,
          description: asset.description,
          created_at: asset.createdAt,
          updated_at: asset.updatedAt,
          location_id: asset.locationId
        })
        .transacting(trx);
    } else {
      return db('assets')
        .insert({
          id: asset.id,
          type: asset.type,
          serial: asset.serial,
          status: asset.status,
          description: asset.description,
          created_at: asset.createdAt,
          updated_at: asset.updatedAt,
          location_id: asset.locationId
        })
        .transacting(trx);
    }
  },
  transaction: async function (callback) {
    return db.transaction(callback);
  }
};
