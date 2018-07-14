const express = require('express')
const mongoose = require('mongoose')
const config = require('./config')

const app = express()

const port = process.env.PORT || 5000

app.set('view engine', 'ejs')

app.use('/assets', express.static(`${__dirname}/public`))

mongoose.connect(config.getDbConnectionString())

app.get('/', (req, res) => res.send('Hello!'))

app.get('/api', (req, res) => {
  const obj = [
    {
      id: 0,
      name: 'John Doe',
    },
    {
      id: 1,
      name: 'Jane Doe',
    },
    {
      id: 2,
      name: 'Jim Doe',
    },
  ]

  res.json(obj)
})

app.listen(port)
