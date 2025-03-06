exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('organizations').del();

  // Inserts seed entries
  await knex('organizations').insert([
    { id: 1, name: 'PNS' },
    { id: 2, name: 'PLJ' }
  ]);
};
