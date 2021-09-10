const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require('./queries')
const parser = require('./articlesParser')
const cors = require('cors');

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(cors({
  origin: ['http://localhost:4200']
}));

app.get('/', db.getArticles);
app.get('/article/:id', parser.getArticleDetails);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })