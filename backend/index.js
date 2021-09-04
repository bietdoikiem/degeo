const app = require('./app');
// const user = require("./routes/user-api")
const { run } = require('./connect-db');
const http = require('http');
const { createAllTable } = require('./create-table');
const socketio = require('socket.io');
const {
	userJoin,
	formatMessage,
	getRoomUsers,
	getCurrentUser,
	userLeave,
} = require('./utils');

const server = http.createServer(app);
const io = socketio(server);

const botName = 'DeGeo Bot';

io.on('connection', (socket) => {
	socket.send("Hello World")
	socket.on('joinRoom', ({ username, room }) => {
		const user = userJoin(socket.id, username, room);

		socket.join(user.room);

		// Welcome current user
		socket.emit(
			'message',
			formatMessage(botName, 'Welcome to DeGeo!'),
		);

		// Broadcast when a user connects
		socket.broadcast
			.to(user.room)
			.emit(
				'message',
				formatMessage(
					botName,
					`${user.username} has joined the chat`,
				),
			);

		// Send users and room info
		io.to(user.room).emit('roomUsers', {
			room: user.room,
			users: getRoomUsers(user.room),
		});
	});

	// Listen for chatMessage
	socket.on('chatMessage', (msg) => {
		const user = getCurrentUser(socket.id);

		io.to(user.room).emit(
			'message',
			formatMessage(user.username, msg),
		);
	});

	// Runs when client disconnects
	socket.on('disconnect', () => {
		const user = userLeave(socket.id);

		if (user) {
			io.to(user.room).emit(
				'message',
				formatMessage(botName, `${user.username} has left the chat`),
			);

			// Send users and room info
			io.to(user.room).emit('roomUsers', {
				room: user.room,
				users: getRoomUsers(user.room),
			});
		}
	});
});

const PORT = 3000;
createAllTable();
run();

// app.use("/users",user)
app.listen(PORT, () => {
	console.log(`Server starts successfully on port ${PORT}`);
});
