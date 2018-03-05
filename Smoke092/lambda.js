let AWS = require('aws-sdk');
exports.handler = function(event, context, callback) {

	//test comment
	console.log('this is a sample console log.');
	callback(null,'Successfully executed');
}