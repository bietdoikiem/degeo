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
router.post("/", async (req,res) => {
    var query = "INSERT INTO video (name, link,theme) VALUES (?,?,?)"
    try{
        console.log("begin log data")
        await InsertData(client,query,req.body.params);
        console.log("data inputed")
        res.json({
          message: `video named ${req.body.params[0]} created successfully.`,
        });
    }
    catch(error){
        console.log(error)
        return res.status(400)
    }
    return res.status(200)
})

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
router.put("/",async (req,res) =>{
    var updates = buildUpdateQuery(req.body.updates);
    var filter = buildFilterQuery(req.body.filter);
    var query = `UPDATE video SET ${updates} WHERE ${filter}`
    try{
        await UpdateData(client,query,req.body.params);
        res.json("video updated")
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
		query = `SELECT * FROM video WHERE ${filter} ALLOW FILTERING`;
	} else {
		query = 'SELECT * FROM video';
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
    var query = `Delete from video WHERE ${filter}`
    try{
        await deleteData(client,query,req.body.params);
        res.json("video deleted")
    }
    catch(error){
        console.log(error)
        return res.status(400)
    }
    return res.status(200)
})
module.exports = router;
