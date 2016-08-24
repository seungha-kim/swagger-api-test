const express = require('express')

const {Todo} = require('../models')

const router = express.Router()

router.get('/todos', (req, res) => {
  Promise.all([
    Todo.count(),
    Todo.count({where: {done: true}})
  ])
  .then(([total, done]) => {
    res.json({total, done})
  })
  .catch(err => {
    res.status(400).json({err})
  })
})

module.exports = router
