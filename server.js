const express = require('express')
const mongoose = require('mongoose')
const config = require('./config')
const setupController = require('./controllers/setupController')
const apiController = require('./controllers/apiController')

const app = express()

const port = process.env.PORT || 5000

app.set('view engine', 'ejs')

app.use('/assets', express.static(`${__dirname}/public`))

mongoose.connect(config.getDbConnectionString(), { useNewUrlParser: true })
setupController(app)
apiController(app)

app.listen(port)
