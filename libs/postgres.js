const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'luisa',
    password: 'admin123',
    database: 'invjl1290',
  });

  await client.connect();
  return client;
}

module.exports = getConnection;
