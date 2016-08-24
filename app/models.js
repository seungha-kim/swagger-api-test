const S = require('sequelize')
const db = require('./db')

exports.Todo = db.define('todo', {
  id: {
    type: S.INTEGER,
    primaryKey: true
  },
  title: {
    type: S.STRING,
    allowNull: false
  },
  done: {
    type: S.BOOLEAN,
    defaultValue: false
  }
}, {
  tableName: 'todos',
  timestamps: false
})
