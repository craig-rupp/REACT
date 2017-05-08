var express = require('express');

//Create App
var app = express();
app.use(express.static('learning'));

app.listen(3000, function(){
	console.log('Express server is up on port 3000');
});