const express = require('express')
const path = require('path')

let app = express()

app.use(express.static(__dirname + '/client/dist/'))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/dist/')
)})

app.listen(4000, () => {console.log('Listening to port 4000!')})