require('dotenv/config')
const express = require('express')
const bodyParser = require('body-parser')

const todos = require('./route/todos')
const stats = require('./route/stats')

const app = express()
app.use(bodyParser.json())
app.use('/todos', todos)
app.use('/stats', stats)

module.exports = {
  start() {
    const port = process.env.SERVER_PORT || 3000
    app.listen(port, () => {
      console.log(`listening port ${port}...`)
    })
  }
}
