const express = require('express')
const app = express()
const cors = require('cors')
const db = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()

app.use(cors())
app.use(bodyParser.json())
db.connect(process.env.DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, () => {})

const route = require('./routes')

app.use(route)
app.listen(3001, () => {
  console.log('server ready at port 3001')
})