/* ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** **
Filename: app.jake
Date: 5/24/17
Author: Chris Mendez http://chrisjmendez.com
Description:
	Commands related to the Angular portion of the app.
* ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** **/
var util = require('util');

namespace('app', function () {
	desc('Globally install Angular using NPM. Ex: jake app:install');
	task('install', { async: true }, { breakOnError: true }, function() {
		var cmds = ['sudo npm install -g @angular/cli'];
		jake.exec(cmds, { printStdout: true });		
	});
	
	desc('Log Into Firebase as an Administrator. Ex: jake app:login');
	task('login', { breakOnError: true }, function() {
		var cmds = ['firebase login'];
		jake.exec(cmds, { printStdout: true });		
	});
	
	desc('Compile Angular app. Ex: jake app:build');
	task('build', { breakOnError: true }, function() {
		var cmds = ['ng build'];
		jake.exec(cmds, { printStdout: true });
	});

	desc('Build Angular app. Ex: jake app:deploy');
	task('deploy', ['app:build'], { breakOnError: true }, function() {
		var cmds = [ 'firebase deploy --except functions' ];
		jake.exec(cmds, { printStdout: true });
	});
	
	desc('Serve app on localhost. Ex: jake app:serve');
	task('serve', { async: true }, function(func) {	
		var cmds = [ 'ng serve --env=local' ];
		jake.exec(cmds, { printStdout: true });
	});
});
