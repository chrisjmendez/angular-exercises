var express = require('express');
var router = express.Router();

var _ = require('lodash');
 
var data = [
	{ id: 11, name: 'Mr. Nice' },
	{ id: 12, name: 'Narco' },
	{ id: 13, name: 'Bombasto' },
	{ id: 14, name: 'Celeritas' },
	{ id: 15, name: 'Magneta' },
	{ id: 16, name: 'RubberMan' },
	{ id: 17, name: 'Dynama' },
	{ id: 18, name: 'Dr IQ' },
	{ id: 19, name: 'Magma' },
	{ id: 20, name: 'Tornado' }
]

/* GET home page. */

router.get('/:id?', function(req, res, next) {
	var id = req.params.id;
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
	var lastObj = data.length - 1;
	var lastId  = data[lastObj].id;
	var newId   = lastId += 1;
	var newName = req.body.name;
	var newObj  = { id: newId, name: newName };
	 	
	var save = _.spread(function(obj){ return data.push(obj) });
		save([newObj]);
		
	console.log(data);
	res.json(data);
});

router.delete('/:id?', function(req, res, next) {
	var id = req.params.id;
	var objIndex = _.findIndex(data, function(obj){ return obj.id == id });
	console.log(objIndex, data.length);
	//If an element is found
	if(objIndex){
		//Delete element
		data.splice(objIndex, 1);
		console.log(data.length);
	}
});


module.exports = router;
