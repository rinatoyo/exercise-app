
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('workouts').del()
    .then(function () {
      // Inserts seed entries
      return knex('workouts').insert([
        {
          user_id: 1
        },
        {
          user_id: 2
        },
        {
          user_id: 3
        },
        {
          user_id: 4
        },
        {
          user_id: 5
        },
        {
          user_id: 6
        },
        {
          user_id: 7
        },
        {
          user_id: 8
        },
        {
          user_id: 9
        },
        {
          user_id: 10
        }
      ]);
    });
};