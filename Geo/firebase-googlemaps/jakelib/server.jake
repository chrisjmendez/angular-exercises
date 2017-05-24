/* ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** **
Filename: server.jake
Date: 5/24/17
Author: Chris Mendez http://chrisjmendez.com
Description:
Commands related to the Firebase Cloud Functions portion of the app.
* ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** **/

var util = require('util');
var fs   = require('fs');
var faker = require('faker');

namespace('server', function () {
	desc('Globally install Firebase Cloud tools using NPM. Ex: jake server:install');
	task('install', { async: true }, { breakOnError: true }, function() {
		var cmds = ['sudo npm install -g firebase-tools'];
		jake.exec(cmds, { printStdout: true });
	});


	desc('Deploy a specific cloud function. Ex: jake server:deploy');
	task('deploy', { async: true }, function(funcName) {	
		var funcName = funcName || "sendSurvey"
		var cmds = [
			'cd ./functions',
			util.format('firebase deploy --only functions:%s', funcName) 
		];
		jake.exec(cmds, { printStdout: true });
	});


	desc('Serve cloud functions on localhost. Ex: jake server:serve');
	task('serve', { async: true }, function(funcName) {	
		var cmds = [ 
			'cd ./functions',
			'sudo firebase serve --only functions'
		];		
		jake.exec(cmds, { printStdout: true });
	});
	
	
	desc('See the logs from a specific cloud function. Ex: jake server:log[sendSurvey]');
	task('log', { async: true }, function(funcName) {	
		var cmds = [ 'cd ./functions' ];
		//Show the log for a specific function.
		if(funcName) cmds.push( util.format('firebase functions:log --only %s', funcName) )
		//Show the log for everything.
		else cmds.push( util.format('firebase functions:log') );
				
		jake.exec(cmds, { printStdout: true });
	});	
});
