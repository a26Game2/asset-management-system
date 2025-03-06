const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, required: true }, // e.g., "active" or "inactive"
  organization_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Organization' }
}, { timestamps: true });

// Use a virtual field for "id" to mirror the default _id field
LocationSchema.virtual('id').get(function () {
  return this._id.toHexString();
});
LocationSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Location', LocationSchema);
