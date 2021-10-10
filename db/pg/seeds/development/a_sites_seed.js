const SITES = require('../../../memory/sites')

exports.seed = async function(knex) {
  await knex.raw('DELETE FROM Sites')

  await knex.raw('ALTER SEQUENCE sites_id_seq RESTART with 1')


  // we use knex helper to insert our memory csv (see below for raw sql)
  await knex('sites')
    .insert(SITES)

  // await knex.raw(`
  //   INSERT INTO Sites (name, state) VALUES
  //   ('55 King St', 'VIC'),
  //   ('Robina Town Centre', 'QLD'),
  //   ('Westpoint', 'NSW')
  // `)
};



