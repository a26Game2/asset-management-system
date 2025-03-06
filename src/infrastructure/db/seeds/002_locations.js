exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('locations').del();

  // Inserts seed entries
  await knex('locations').insert([
    { id: 1, name: 'Da Nang', status: 'active', organization_id: 1 },
    { id: 2, name: 'Ha Noi', status: 'inactive', organization_id: 1 },
    { id: 3, name: 'Ho Chi Minh', status: 'active', organization_id: 1 },
    { id: 4, name: 'Nha Trang', status: 'active', organization_id: 2 },
    { id: 5, name: 'Can Tho', status: 'active', organization_id: 2 }
  ]);
};
