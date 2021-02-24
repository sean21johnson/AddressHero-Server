const knex = require('knex');
const app = require('./app')
const { PORT, DATABASE_URL, DATABASE_URL_TEST } = require('./config')

const db = knex({
  client: 'pg',
  // connection: DATABASE_URL
  connection: DATABASE_URL_TEST
})

app.set('db', db);

app.listen(PORT, () => {
  return (`Server listening at http://localhost:${PORT}`)
});