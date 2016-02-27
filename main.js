var express = require('express')
var bodyParser = require('body-parser');
var fs = require("fs")
var app = express()

app.use(bodyParser.urlencoded())

app.get('/', function(request, response) {
  fs.createReadStream("views/index.html").pipe(response)
})

app.post('/calc', function(request, response) {
  var name = request.body.name
  var age = request.body.age
  // TODO: do something
  response.send("Name: " + name + " Age: " + age)
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
})
