/* ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** **
Filename: db.jake
Date: 5/17/17
Author: Chris Mendez http://chrisjmendez.com
Description:
Commands related to working directly with the Firebase DB
* ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** **/

var util  = require('util');
var fs    = require('fs');
var faker = require('faker');
var path  = require("path");

var firebase = require('firebase');
// VISIT HERE: https://firebase.google.com/docs/web/setup
var firebaseConfig = {
	apiKey: "",
	authDomain: "",
	databaseURL: "",
	projectId: "",
	storageBucket: "",
	messagingSenderId: ""
}

var app = firebase.initializeApp(firebaseConfig);
var db  = firebase.database();

namespace('db', function () {
	desc('Import JSON');
	task('import', { async: true }, { breakOnError: true }, function() {
	});	
});
