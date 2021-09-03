const app = require('./app');
const { run } = require('./connect-db');
const {createAllTable} = require("./create-table")

const PORT = 3000;
createAllTable();
run();
createAllTable();

app.listen(PORT, () => {
	console.log(`Server starts successfully on port ${PORT}`);
});
