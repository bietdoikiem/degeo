const { client } = require('./connect-db');

function InsertData(query,params){
    return client.execute(query,params)
}

function SelectData(query,params){
    return client.execute(query,params)
}

function UpdateData(query,params){
    return client.execute(query, params, { prepare : true } )
}

function deleteData(query,params){
    return client.execute(query, params, { prepare: true })
}

function buildUpdateQuery(params){
    var query = ""
    params.slice(0,-1).forEach(element => {
        query = query.concat(element)
		query = query.concat(" = ? ")
        query = query.concat(",")
    });
    query = query.concat(params[params.length -1])
	query = query.concat(" = ? ")
    return query
}

function buildFilterQuery(params){
    var query = ""
    params.slice(0,-1).forEach(element =>{
        query = query.concat(element)
		query = query.concat(" = ? ")
        query = query.concat(" and ")
    })
    query = query.concat(params[params.length - 1])
	query = query.concat( " = ? ")

	return query
}

module.exports = {
    InsertData,
    SelectData,
    UpdateData,
    deleteData,
    buildFilterQuery,
    buildUpdateQuery
};