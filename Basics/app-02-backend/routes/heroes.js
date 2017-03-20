var express = require('express');
var router = express.Router();

var _ = require('lodash');

var data = require('../public/javascripts/json/Model');

/* GET home page. */

router.get('/:id?', function(req, res, next) {
	var id = req.params.id;
	var search = req.params.name;
	
	console.log("search:", search);
	var result = _.find(data, function(obj){ return obj.id == id });
	if(result){
		res.json(result);
	} else {
		res.json(data);
		//res.json({ success: false, message: "Sorry, data not available."});
	}
});


router.put('/:id?', function(req, res, next) {
	var newName = req.body.name;
	var id      = req.params.id;
	//If a match exists, get the index
	var objIndex = _.findIndex(data, function(obj){ return obj.id == id });
	//If a match was found, then update the data
	var result = ( objIndex >= 0 ) ? data[objIndex].name = newName : null;
	
	if(result){
		res.json(result)
	} else {
		res.json({ success: false, message: "Sorry, data not available."})		
	}
});


router.post('/', function(req, res, next) {
	var newName    = req.body.name;
	var lastObjIdx = (data.length > 0) ? data.length - 1 : 0;

	//TODO - Clean this up, it's a disaster in thinking.
	if(lastObjIdx <= 0){
		var newObj = { id: 0, name: newName };
	} else {
		var lastId = (data[lastObjIdx].id);
		var newId  = lastId += 1;
		var newObj = { id: newId, name: newName };
	}
	data.push(newObj)

	res.json(data);
});

router.delete('/:id?', function(req, res, next) {
	var id = req.params.id;
	var objIndex = _.findIndex(data, function(obj){ 
		if(obj.id == id){
			console.log(obj.id, id)
		}
		return obj.id == id 
	});

	//If an element is found
	if(objIndex >= 0){
		//Delete element
		console.log(objIndex, data[objIndex]);
		var arr = data.splice(objIndex, 1);	
		//console.log(arr, arr.length, data.length);
		res.json(data)
	}
});


module.exports = router;
