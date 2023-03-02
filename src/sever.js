const express = require('express')
const morgan = require('morgan')
import configViewEngine from './configs/viewEngine'
import initRouter from './router/index'
var bodyParser = require('body-parser')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000
app.use(bodyParser.urlencoded({ extended: true }))
configViewEngine(app)
initRouter(app)
// parse application/json
app.use(bodyParser.json())
app.use(morgan('combined'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})