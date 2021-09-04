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

<<<<<<< HEAD
// Create API 
router.post("/", async (req,res) => {
    var query = "INSERT INTO users (username, email, avatar, password) VALUES (?,?,?,?)"
    try{
        console.log("begin log data")
        await InsertData(client,query,req.body.params);
        console.log("data inputed")
        res.json({
          message: `User named ${req.body.params[0]} created successfully.`,
        });
    }
    catch(error){
        console.log(error)
        return res.status(400)
    }
    return res.status(200)
})
=======
// Create API
router.post('/', async (req, res) => {
	var query =
		'INSERT INTO users (username, email, avatar, password) VALUES (?,?,?,?)';
	try {
		console.log('begin log data');
		await InsertData(client, query, req.body.params);
		console.log('data inputed');
		res.json({
			message: `User named ${req.body.params[0]} created successfully.`,
		});
	} catch (error) {
		console.log(error);
		return res.status(400);
	}
	return res.status(200);
});
>>>>>>> 88af2871ad96fe8d9fee745c99344fb9480fde75

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
<<<<<<< HEAD
router.put("/",async (req,res) =>{
    var updates = buildUpdateQuery(req.body.updates);
    var filter = buildFilterQuery(req.body.filter);
    var query = `UPDATE users SET ${updates} WHERE ${filter}`
    try{
        await UpdateData(client,query,req.body.params);
        res.json("user updated")
    }
    catch(error){
        console.log(error)
        return res.status(400)
    }
    return res.status(200)
}) 
=======
router.put('/', async (req, res) => {
	var updates = buildUpdateQuery(req.body.updates);
	var filter = buildFilterQuery(req.body.filter);
	var query = `UPDATE users SET ${updates} WHERE ${filter}`;
	try {
		await UpdateData(client, query, req.body.params);
		res.json('user updated');
	} catch (error) {
		console.log(error);
		return res.status(400);
	}
	return res.status(200);
});
>>>>>>> 88af2871ad96fe8d9fee745c99344fb9480fde75

/*
body format for request of delete and select API should have look like this
filters : array of field declare in primary key to updates , array of length 1 is fine
params : value of the above values 

{
    filters : ["field to filter 1","field to filter 2"],
    params : [field to filter 1 value, field to filter 2 value]

}

*/

<<<<<<< HEAD
// select API 
router.get("/",async (req,res) =>{
    var filter = buildFilterQuery(req.body.filter)
    var query = `SELECT * FROM users WHERE ${filter} ALLOW FILTERING`
    try{
        var result = await SelectData(client,query,req.body.params);
        return res.json(result.first())
    }
    catch(error){
        console.log(error)
        return res.status(400)
    }
    
}) 

// delete API 
router.delete("/",async(req,res) => {
    var filter = buildFilterQuery(req.body.filter)
    var query = `Delete from users WHERE ${filter}`
    try{
        await deleteData(client,query,req.body.params);
        res.json("user deleted")
    }
    catch(error){
        console.log(error)
        return res.status(400)
    }
    return res.status(200)
})
=======
// select API
router.get('/', async (req, res) => {
	var filter = buildFilterQuery(req.body.filter);
	var query = `SELECT * FROM users WHERE ${filter} ALLOW FILTERING`;
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
	var query = `Delete from users WHERE ${filter}`;
	try {
		await deleteData(client, query, req.body.params);
		res.json('user deleted');
		return res.status(200);
	} catch (error) {
		console.log(error);
		return res.status(400);
	}
});
>>>>>>> 88af2871ad96fe8d9fee745c99344fb9480fde75
module.exports = router;
