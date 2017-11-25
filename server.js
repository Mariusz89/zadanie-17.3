var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
var stringifyFile = '';

app.post('/updateNote/:note', function (req, res) {
    fs.writeFile('./test.json', stringifyFile += req.params.note, function(err) {
    if (err) throw err;
    console.log('file updated');
});
});

app.get('/getNote', function (req, res) {
    fs.readFile('./test.json', 'utf8', function(err, data) {
    if (err) throw err;
    stringifyFile = data
    res.send(data);
});
});

app.listen(3000);