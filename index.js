var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(function (req, res, next)	{
  console.log('Record	timestamp');
  next();
});
app.use(bodyParser.json());

app.post('/calculator/rest/plus', function (req, res, next) {
  var body = req.body;
  var x = body.x;
  var y = body.y;
  var result = 0;
  var object = {
    "x": x,
    "y": y,
    "result X Plus Y": x + y
  }
  res.json(object);
});

app.post('/calculator/rest/minus', function (req, res, next)	{
  var body = req.body;
  var x = body.x;
  var y = body.y;
  var result = 0;
  var object = {
    "x": x,
    "y": y,
    "result X Minus Y": x - y
  }
  res.json(object);
});

app.post('/calculator/rest/multiply', function (req, res, next)	{
  var body = req.body;
  var x = body.x;
  var y = body.y;
  var result = 0;
  var object = {
    "x": x,
    "y": y,
    "result X Multiply Y": x * y
  }
  res.json(object);
});

app.listen(3000, function ()	{
  console.log('Starting node on port 3000');
});