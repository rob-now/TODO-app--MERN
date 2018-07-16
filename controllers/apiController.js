const bodyParser = require('body-parser')
const Todos = require('../models/todoModel')

module.exports = (app) => {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  app.get('/api/todos/:username', (req, res) => {
    Todos.find({ username: req.params.username }, (err, todos) => {
      if (err) throw err
      res.send(todos)
    })
  })
}
