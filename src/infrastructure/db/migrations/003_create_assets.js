exports.up = function (knex) {
  return knex.schema.createTable('assets', table => {
    table.string('id').primary(); // Use the API's asset id as primary
    table.string('type');
    table.string('serial');
    table.string('status');
    table.text('description');
    table.datetime('created_at');
    table.datetime('updated_at');
    table.integer('location_id')
      .unsigned()
      .references('id')
      .inTable('locations')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('assets');
};
