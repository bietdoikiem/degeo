const app = require('./app');
// const user = require("./routes/user-api")
const { run } = require('./connect-db');
const { createAllTable } = require('./create-table');
const socket = require('socket.io');
const {
	userJoin,
	formatMessage,
	getRoomUsers,
	getCurrentUser,
	userLeave,
} = require('./utils');

const PORT = 3000;
createAllTable();
run();

// app.use("/users",user)
const server = app.listen(process.env.PORT || PORT, () => {
	console.log(`Server starts successfully on port ${PORT}`);
});

const io = socket(server, {
	cors: {
		origin: '*',
	},
});

const botName = 'DeGeo Bot';

io.on('connection', (socket) => {
	console.log(`${socket.id} is connected`);
	socket.on('joinRoom', ({ username, room }) => {
		console.log(`${username} has joined ${room}`);
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
					'SYSTEM',
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
				formatMessage('SYSTEM', `${user.username} has left the chat`),
			);

			// Send users and room info
			io.to(user.room).emit('roomUsers', {
				room: user.room,
				users: getRoomUsers(user.room),
			});
		}
	});
});
