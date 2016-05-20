var http = require('http');
var express = require('express');
var app = express();
var server;
var nameDB = require('./name-db');
var _ = require('underscore.string');
var port = 8080;


//random comment 12345678

var start= exports.start = function start(port, cb) {
	server= app.listen(port, cb)
}

var stop = exports.stop = function stop(cb) {
	server.close(cb)
}

app.get(
	'/hello',
	function sendResponse(req, res) {
		res.status(200).send('Hello world!');
	}
);

app.get(
	'/greetings',
	function sendResponse(req, res) {
		var names = nameDB.getRandomNames(3);
		var greeting = 'Greetings from ' + _.toSentenceSerial(names) + '!';
		res.status(200).send(greeting);
	}
)

//app.listen(port, function() {
//	console.log('listening on port', port)
//})
