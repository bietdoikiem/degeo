const app = require('./app');
// const user = require("./routes/user-api")
const { run } = require('./connect-db');
const {createAllTable} = require("./create-table")

const PORT = 3000;
// createAllTable();
run();
// app.use("/users",user)
app.listen(PORT, () => {
	console.log(`Server starts successfully on port ${PORT}`);
});
