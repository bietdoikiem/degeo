var express = require('express');
var router = express.Router();
const { client } = require('../connect-db');
const{InsertData,UpdateData,SelectData,deleteData,buildFilterQuery} = require("./BaseFunction")
// const {v4 : uuidv4} = require('uuid4')
// const TimeUuid = require('cassandra-driver').types.TimeUuid;

// Create API 
router.post("/", async (req,res) => {
    var query = "INSERT INTO message (time, user,room,content) VALUES (?,?,?,?)";
    try{
        console.log("begin log data")
        var params = [Date.now()]
        params.push(...req.body.params)
        var roommessageQuery = 
        `UPDATE roommessage SET messages = ? + messages WHERE room = ?`;
        console.log(params)
        await UpdateData(client,roommessageQuery,[[(params[0])],params[2]]);
        await InsertData(client,query,params);
        
        console.log("data inputed")
        res.json({
          message: `message at ${params[0]} created successfully.`,
        });
    }
    catch(error){
        console.log(error)
        return res.status(400)
    }
    return res.status(200)
})


/*
body format for request of delete and select API should have look like this
filters : array of field declare in primary key to updates , array of length 1 is fine
params : value of the above values 
{
    filters : ["field to filter 1","field to filter 2"],
    params : [field to filter 1 value, field to filter 2 value]
}

*/

// select API
router.get('/', async (req, res) => {
	let query;
	if (req.body.filter) {
		var filter = buildFilterQuery(req.body.filter);
		query = `SELECT * FROM message WHERE ${filter} ALLOW FILTERING`;
	} else {
		query = 'SELECT * FROM message';
	}

	try {
		const result = await SelectData(client, query, req.body.params);
		return res.json(result.first());
	} catch (error) {
		console.log(error);
		return res.status(400);
	}
});

// delete API 
router.delete("/",async(req,res) => {
    var filter = buildFilterQuery(req.body.filter)
    var query = `Delete from message WHERE ${filter}`
    try{
        await deleteData(client,query,req.body.params);
        res.json("message deleted")
    }
    catch(error){
        console.log(error)
        return res.status(400)
    }
    return res.status(200)
})


module.exports = router;
