const express = require('express')

const {Todo} = require('../models')

const router = express.Router()

router.get('/', (req, res) => {
  Todo
  .findAll()
  .then(todos => {
    res.json(todos)
  })
})

router.post('/', (req, res) => {
  Todo
  .create(req.body)
  .then(() => {
    res.json({ok: true})
  })
  .catch(err => {
    res.status(400).json({err})
  })
})

router.get('/:todoId', (req, res) => {
  Todo
  .findById(req.params.todoId)
  .then(todo => {
    res.json(todo)
  })
  .catch(err => {
    res.status(400).json({err})
  })
})

router.put('/:todoId', (req, res) => {
  Todo
  .findById(req.params.todoId)
  .then(todo => {
    return todo.update(req.body)
  })
  .then(todo => {
    res.json(todo)
  })
  .catch(err => {
    res.status(400).json({err})
  })
})

router.delete('/:todoId', (req, res) => {
  Todo
  .findById(req.params.todoId)
  .then(todo => {
    return todo.destroy()
  })
  .then(todo => {
    res.json({ok: true})
  })
  .catch(err => {
    res.status(400).json({err})
  })
})

module.exports = router
