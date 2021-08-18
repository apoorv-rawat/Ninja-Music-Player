var express = require('express');
var app = express();
var path = require('path');

// serving static files in express js
app.use(express.static(path.join(__dirname)));
// app.use("/assets", express.static(__dirname));
// app.use("/css", express.static(__dirname));


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));

});


// app.get('/')
// playlist page

app.listen(process.env.PORT || 8080);


