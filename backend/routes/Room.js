var express = require('express');
var router = express.Router();
const { client } = require('../connect-db');

const {
	InsertData,
	SelectData,
	UpdateData,
	deleteData,
	buildFilterQuery,
	buildUpdateQuery,
} = require('./BaseFunction');

// Create API
router.post('/', async (req, res) => {
	var query =
		'INSERT INTO room (name,participants, Service, games) VALUES (?,?,?,?)';
	var paramsRoomMessage = [req.body.params[0],[]]
	var queryRoomMessage = 
		"Insert INTO roommessage (room, messages) VALUES (?,?)"
	try {
		console.log('begin log data');
		await InsertData(client, query, req.body.params);
		await InsertData(client,queryRoomMessage,paramsRoomMessage);
		console.log('data inputed');
		res.json({
			message: `room named ${req.body.params[0]} created successfully.`,
		});
	} catch (error) {
		console.log(error);
		return res.status(400);
	}
	return res.status(200);
});

// update API
/*
body format for update API should have look like this
updates : array of field to updates 
filters : array of field declare in primary key to updates , array of length 1 is fine
params : value of the above values 

{
    updates : ["field to update1", "field to update 2"],
    filters : ["field to filter 1","field to filter 2"],
    params : [field to update1 value, field to update 2 value ,field to filter 1 value, field to filter 2 value  ]

}

*/
router.put('/', async (req, res) => {
	var updates = buildUpdateQuery(req.body.updates);
	var filter = buildFilterQuery(req.body.filter);
	var query = `UPDATE room SET ${updates} WHERE ${filter}`;
	try {
		await UpdateData(client, query, req.body.params);
		res.json('room updated');
	} catch (error) {
		console.log(error);
		return res.status(400);
	}
	return res.status(200);
});

/*
body format for request of delete and select API should have look like this
filters : array of field declare in primary key to updates , array of length 1 is fine
params : value of the above values 
{
    filters : ["field to filter 1","field to filter 2"],
    params : [field to filter 1 value, field to filter 2 value]
}

*/

// select one API
router.get('/', async (req, res) => {
<<<<<<< HEAD
	var filter = buildFilterQuery(req.body.filter);
	var query = `SELECT * FROM room WHERE ${filter} ALLOW FILTERING`;
=======
	let query;
	if (req.body.filter) {
		var filter = buildFilterQuery(req.body.filter);
		query = `SELECT * FROM room WHERE ${filter} ALLOW FILTERING`;
	} else {
		query = 'SELECT * FROM room';
	}

>>>>>>> 110e0bdacd44793b1ca00811baafc2c9fa7988c1
	try {
		const result = await SelectData(client, query, req.body.params);
		return res.json(result.first());
	} catch (error) {
		console.log(error);
		return res.status(400);
	}
});

// delete API
router.delete('/', async (req, res) => {
	var filter = buildFilterQuery(req.body.filter);
	var query = `Delete from room WHERE ${filter}`;
	try {
		await deleteData(client, query, req.body.params);
		res.json('room deleted');
		return res.status(200);
	} catch (error) {
		console.log(error);
		return res.status(400);
	}
});

<<<<<<< HEAD
// get all message of a room API 
router.get("/messages/",async(req,res)=>{
	var filter = buildFilterQuery(req.body.filter)
    var query = `SELECT messages FROM roommessage WHERE ${filter} ALLOW FILTERING`
    try{
        var result = await SelectData(client,query,req.body.params);
        return res.json(result.rows)
    }
    catch(error){
        console.log(error)
        return res.status(400)
    }
})



=======
>>>>>>> 110e0bdacd44793b1ca00811baafc2c9fa7988c1
module.exports = router;


