exports.up = function (knex) {
  return knex.schema.createTable('locations', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('status').notNullable(); // e.g., "active" or "inactive"
    table.integer('organization_id')
      .unsigned()
      .references('id')
      .inTable('organizations')
      .onDelete('CASCADE');
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('locations');
};
