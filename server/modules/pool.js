const pg = require('pg');

const config = {
  host: 'localhost',
  user: 'postgres',
  password: 'admin',
  port: 5432,
  database: 'searchable_directory',
  max: 10,
  idleTimeoutMillis: 30000
};

const pool = new pg.Pool(config);

pool.on('error', (err) => {
  console.log('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = pool;
