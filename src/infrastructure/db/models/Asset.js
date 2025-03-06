const mongoose = require('mongoose');

const AssetSchema = new mongoose.Schema({
  _id: { type: String, required: true }, // Use the API's asset id
  type: { type: String, required: true },
  serial: { type: String, required: true },
  status: { type: String, required: true },
  description: { type: String },
  created_at: { type: Date, required: true },
  updated_at: { type: Date, required: true },
  location_id: { type: Number, required: true }
});

module.exports = mongoose.model('Asset', AssetSchema);
