const { Client } = require('cassandra-driver');
const {InsertData} = require("./BaseFunction")

const client = new Client({
	cloud: {
		secureConnectBundle: './secure-connect.zip',
	},
	credentials: {
		username: 'mOyCZhGBKqjfriZoqmIjabRN',
		password:
			'r69IKsEfvL7XM7YHLAsdWy6,sv.Uje2WBmZtrjbWu_LjM.RLqKTBJJ-uGF5W8_o3Fly8CRcMGOzM1oSxPPSH+pi8s2BPZjteimygwxYXRn6fRZ5XaB01_R0PBNNug5bv',
	},
	keyspace: 'miraclekidsdb',
});






async function run() {
	await client.connect();
	// var query = "INSERT INTO users (username, email, avatar, password) VALUES (?,?,?,?)";
	// var params = ["Dat711","Dat711@gmail.com","12345","123456"];

	// var query = "UPDATE users SET avatar = ?, password = ? WHERE username = ? and email = ?";
	// var params = ["178906","189023","Dat711","Dat711@gmail.com"];

	// var query = "select * from users where username = ? ALLOW FILTERING"
	// var params = ["Dat"]

	// var query = "DELETE FROM users where username = ? and email = ?";
	// var params = ["Dat","Dat@gmail.com"];

	// var query ="select * from users"
	// var params = []

	// const result = await client.execute(query,params);
	// console.log(result.rows);


	// Execute a query
	[
		'users',
		'location',
		'room',
		'playlist',
		'game',
		'video',
		'message',
	].forEach(async (table) => {
		const rs = await client.execute(
			`SELECT * FROM miraclekidsdb.${table}`,
		);
		console.log(
			`Your cluster for table ${table} returned ${rs.rowLength} row(s)`,
		);
	});

	return { client };
}

module.exports = {
	client,
	run,
};
