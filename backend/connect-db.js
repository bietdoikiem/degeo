const { Client } = require('cassandra-driver');

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

	
	// await client.execute("DROP TABLE miraclekidsdb.location ");
	// await client.execute("DROP TABLE miraclekidsdb.locationdetail ");
	// Execute a query
	[
		'users',
		'location',
		'room',
		'playlist',
		'game',
		'video',
		'message',
		"roommessage",
	].forEach(async (table) => {
		const rs = await client.execute(
			`SELECT * FROM miraclekidsdb.${table}`,
		);
		
		// var describe = 

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
