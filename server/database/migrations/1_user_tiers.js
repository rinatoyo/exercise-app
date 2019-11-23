
exports.up = function (knex) {
    return knex.schema.createTable("user_tiers", table => {
        table.increments();
        table.string("tiers");
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("user_tiers");
};
