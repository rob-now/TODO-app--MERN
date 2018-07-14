const Todos = require('../models/todoModel')

module.exports = (app) => {
  app.get('/api/setupTodos', (req, res) => {
    // seed database, fake, dummy objects
    // Obiekty muszą mieć tą samą strukturę co nasz schemat (scheme)
    const starterTodos = [
      {
        username: 'test_user1',
        todo: 'Make loundry',
        isDone: false,
        hasAttachment: false,
      },
      {
        username: 'test_user1',
        todo: 'Feed cat',
        isDone: false,
        hasAttachment: false,
      },
      {
        username: 'test_user1',
        todo: 'Buy cookies',
        isDone: false,
        hasAttachment: false,
      },
    ]

    Todos.create(starterTodos, (err, results) => (
      res.send(results)
    ))
  })
}
