const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const morgan = require('morgan')

let app = express()
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(express.static(__dirname + '/client/dist/'))

app.get('/working', (req, res) => {
  res.send('Server working')
})

app.use(express.static(__dirname + '/client/dist/'))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/dist/')
)})

app.listen(4000, () => {console.log('Listening to port 4000!')})