class Asset {
  constructor({ id, type, serial, status, description, createdAt, updatedAt, locationId }) {
    this.id = id;
    this.type = type;
    this.serial = serial;
    this.status = status;
    this.description = description;
    this.createdAt = new Date(createdAt * 1000);
    this.updatedAt = new Date(updatedAt * 1000);
    this.locationId = locationId;
  }
}

module.exports = Asset;