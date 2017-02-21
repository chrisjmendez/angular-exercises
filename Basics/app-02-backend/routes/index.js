var express = require('express');
var router = express.Router();

var _ = require('lodash');

// Load method categories. 
var array = require('lodash/array');
var object = require('lodash/fp/object');
 
 
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
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/hero/:id', function(req, res, next) {
	var id = req.params.id;
	var result = _.find(data, function(shift){ return shift.id ==  id });	
	if(!_.isUndefined(result)){
		res.json(result)
	} else {
		res.json({ success: false, message: "Sorry, data not available."})
	}
});

router.get('/heroes', function(req, res, next) {
	res.json(data)
});

module.exports = router;
