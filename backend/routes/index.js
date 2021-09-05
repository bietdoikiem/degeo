var express = require('express');
const { getMoreData } = require('./query');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
	res.send('Hello User');
});

router.get('/datareport', function (req, res) {
	getMoreData()
		.then(function (data) {
			res.render('datareport', { data });
		})
		.catch(function (filteredData) {
			res.send(filteredData);
		});
});

router.get('/data', function (req, res) {
	getMoreData()
		.then(function (data) {
			res.send(data);
		})
		.catch(function (filteredData) {
			res.send(filteredData);
		});
});

module.exports = router;
