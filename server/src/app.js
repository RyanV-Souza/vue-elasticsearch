const express = require('express')
const app = express()

const index = require('./routes/index')
const search = require('./routes/search')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', index);
app.use('/search', search)

module.exports = app;