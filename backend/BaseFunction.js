const { client } = require('./connect-db');

function InsertData(query,params){
    return client.execute(query,params)
}

function SelectData(query,params){
    return client.execute(query,params)
}