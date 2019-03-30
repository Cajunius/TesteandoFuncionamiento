var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('<b>QLQ</b> <br> <p>Manin</p>')
})
 
app.listen(3000)