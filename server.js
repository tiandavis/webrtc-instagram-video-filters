var express		= require('express');
var app			= express();
var bodyParser	= require('body-parser');
var https 		= require('https');
var http 		= require('http');
var fs 			= require('fs');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

// API Routes
var router = express.Router();

// Create a token (accessed at POST /api/tokens)
router.route('/tokens')
	
	.post(function(req, res) {
		
	});

// Register our routes
app.use('/api', router);

app.use(express.static(__dirname + '/app'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

// Start the server
var server = http.createServer(app).listen(port);