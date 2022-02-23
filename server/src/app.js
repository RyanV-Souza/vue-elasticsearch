const express = require('express')
const cors = require('cors')
const app = express()

var corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200
}

const index = require('./routes/index')
const search = require('./routes/search')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors(corsOptions))

app.use('/', index);
app.use('/search', search)

module.exports = app;