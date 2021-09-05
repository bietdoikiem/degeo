const { client } = require('../connect-db');

async function getMoreData() {
	const result = await client.execute(
		'SELECT customer_name, address, description, price, prod_id, prod_name, sell_price FROM miraclekidsdb.orders',
	);
	return result.rows;
}

module.exports = { getMoreData };
