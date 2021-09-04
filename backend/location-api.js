const app = require("./app");
const{InsertData,SelectData,UpdateData,deleteData} = require("./BaseFunction");

// Create API 
app.post("/location/", async (req,res) => {
    var query = "INSERT INTO location (username, email, avatar, password) VALUES (?,?,?,?)"
    try{
        result = await InsertData(query,req.body);
    }
    catch(error){
        console.log(error)
        return res.status(400)
    }
    return res.status(200)
})


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

// update API 
app.get("/location/",async (req,res) =>{
    var updates = buildUpdateQuery(req.body.updates);
    var filter = buildFilterQuery(req.body.filters);
    var query = `UPDATES users SET ${updates} WHERE ${filter} ALLOW FILTERING`
    try{
        result = await UpdateData(query,req.body.params);
    }
    catch(error){
        console.log(error)
        return res.status(400)
    }
    return res.json(result)
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
app.put("/location/",async (req,res) =>{
    var filter = buildFilterQuery(req.body.filter)
    var query = `SELECT * FROM location WHERE ${filter} ALLOW FILTERING`
    try{
        result = await InsertData(query,req.body.params);
    }
    catch(error){
        console.log(error)
        return res.status(400)
    }
    return res.status(200)
}) 

// delete API 
app.delete("/location/",async(req,res) => {
    var filter = buildFilterQuery(req.body.filter)
    var query = `Delete from location WHERE ${filter}`
    try{
        result = await InsertData(query,req.body);
    }
    catch(error){
        console.log(error)
        return res.status(400)
    }
    return res.status(200)
})









