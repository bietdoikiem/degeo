const app = require("./app");
const{InsertData,SelectData,UpdateData,deleteData,buildFilterQuery,buildUpdateQuery} = require("./BaseFunction")

// Create API 
app.post("/users/", async (req,res) => {
    var query = "INSERT INTO users (username, email, avatar, password) VALUES (?,?,?,?)"
    try{
        result = await InsertData(query,req.body);
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
app.get("/users/",async (req,res) =>{
    var updates = buildUpdateQuery(req.body.updates);
    var filter = buildFilterQuery(req.body.filter);
    var query = `UPDATES users SET ${updates} WHERE ${filter} ALLOW FILTERING`
    try{
        result = await UpdateData(query,req.body.params);
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
app.get("/users/",async (req,res) =>{
    var filter = buildFilterQuery(req.body.filter)
    var query = `SELECT * FROM users WHERE ${filter} ALLOW FILTERING`
    try{
        result = await SelectData(query,req.body.params);
    }
    catch(error){
        console.log(error)
        return res.status(400)
    }
    return res.status(200)
}) 

// delete API 
app.delete("/users/",async(req,res) => {
    var filter = buildFilterQuery(req.body.filter)
    var query = `Delete from users WHERE ${filter} ALLOW FILTERING`
    try{
        result = await deleteData(query,req.body);
    }
    catch(error){
        console.log(error)
        return res.status(400)
    }
    return res.status(200)
})



