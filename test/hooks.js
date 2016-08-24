const hooks = require('hooks')
const fixtures = require('sequelize-fixtures')

const server = require('../app/server')
const db = require('../app/db')
const models = require('../app/models')
const migration = require('../migration')
const qi = db.getQueryInterface()

let dbTransaction;

hooks.beforeAll((transactions, done) => {
  qi.dropAllTables()
  .then(() => {
    return migration.up()
  })
  .then(() => {
    return fixtures.loadFile('test/fixture/*.yml', models)
  })
  .then(() => {
    server.start()
    setTimeout(done)
  })
})

hooks.beforeEach((transactions, done) => {
  db.transaction().then(t => {
    dbTransaction = t
    done()
  })
})

hooks.afterEach((transactions, done) => {
  dbTransaction.rollback().then(() => {
    done()
  })
})

hooks.afterAll((transactions, done) => {
  process.exit(0)
})
