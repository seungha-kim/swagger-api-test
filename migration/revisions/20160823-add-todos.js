const S = require('sequelize')

module.exports = {
  up: function(q) {
    q.createTable('todos', {
      id: {
        type: S.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: S.STRING,
        allowNull: false
      },
      done: {
        type: S.BOOLEAN,
        defaultValue: false
      }
    })
  },
  down: function(q) {
    q.dropTable('todos')
  }
}
