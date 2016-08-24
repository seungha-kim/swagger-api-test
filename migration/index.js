const path = require('path')
const Umzug = require('umzug')

const db = require('../app/db')

module.exports = new Umzug({
  storage: 'sequelize',
  storageOptions: {
    sequelize: db
  },
  migrations: {
    params: [db.getQueryInterface()],
    path: path.resolve(__dirname, 'revisions'),
    pattern: /\.js$/
  }
})
