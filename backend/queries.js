const Pool = require('pg').Pool
const pool = new Pool({
  user: 'docker',
  host: 'localhost',
  database: 'pubmed',
  password: 'docker',
  port: 5432,
})

const getArticles = (request, response) => {
  pool.query('SELECT a.id, a.name, t.name as type FROM articles a inner join article_type t on a.article_type_id = t.article_type_id', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getArticles,
}