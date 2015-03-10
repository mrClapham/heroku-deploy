var express = require('express')
    , http = require('http')
    , path = require('path')


var app = express();

app.set('title','Helloo Heroku');

app.use(express.static(path.join(__dirname, 'app')));

/* serves intro splash page - if I have time to do one */
app.get("/intro", function(req, res) {
    res.sendFile('app/intro.html');
});
/* serves main page */
app.use("/", express.static(__dirname + 'app/index.html'));


var port = process.env.PORT || 8090;

http.createServer(app).listen(port, function(){
    console.log('Express server listening on port ' + port);
});
