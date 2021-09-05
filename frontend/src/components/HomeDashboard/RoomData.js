/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { List, ListItem } from '@chakra-ui/react';

function RoomData() {
	const [data, setData] = useState({});

	useEffect(() => {});
	return (
		<>
			<List spacing={5}>
				<ListItem>🟢 Online: </ListItem>
				<ListItem>📌 Location: </ListItem>
				<ListItem>🎶 Genre: </ListItem>
			</List>
			<br />
		</>
	);
}

export default RoomData;
