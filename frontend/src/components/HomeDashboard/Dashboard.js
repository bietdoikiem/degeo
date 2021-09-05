import React, { useState } from 'react';
import {
	Box,
	Button,
	useDisclosure,
	Fade,
	Text,
	IconButton,
} from '@chakra-ui/react';
import {
	ArrowBackIcon,
	CloseIcon,
	HamburgerIcon,
} from '@chakra-ui/icons';

import { useDispatch, useSelector } from 'react-redux';
import RoomData from './RoomData';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import ChatContainer from '../../containers/ChatContainer';
import { logout } from '../../redux/ducks/auth/actions';

function Dashboard() {
	// const { isOpen, onOpen, onClose } = useDisclosure();
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);
	const [registered, setRegistered] = useState(false);
	const [currentUser, setCurrentUser] = useState(
		auth?.currentUser?.username,
	);

	React.useEffect(() => {
		setCurrentUser(auth.currentUser?.username);
	}, [auth.currentUser]);
	const { isOpen, onToggle } = useDisclosure();
	const onRegister = () => {
		setRegistered(!registered);
	};

	const path = React.useMemo(() =>
		window.location.pathname.split('/'),
	);

	const handleLogout = () => {
		dispatch(logout());
		// eslint-disable-next-line react/prop-types
	};

	return (
		<>
			<IconButton
				margin={5}
				position="absolute"
				zIndex={20}
				aria-label="Open Dashboard"
				icon={<HamburgerIcon />}
				onClick={onToggle}
			/>

			<Fade in={isOpen}>
				<Box
					position="absolute"
					paddingTop="10"
					paddingX="8"
					zIndex={50}
					bg="white"
					h="full"
					shadow="lg"
					w={['full', '400px', '500px']}
				>
					<Box marginBottom={10}>
						<IconButton
							marginRight={5}
							aria-label="Open Dashboard"
							icon={<CloseIcon />}
							onClick={onToggle}
						/>
						{currentUser && (
							<IconButton
								colorScheme="red"
								marginRight={5}
								onClick={handleLogout}
								icon={<ArrowBackIcon />}
							/>
						)}
					</Box>
					{currentUser && (
						<Box>
							<RoomData />
							{path.includes('locations') && (
								<ChatContainer room={path[2]} />
							)}
						</Box>
					)}
					{!currentUser && !registered ? (
						<>
							<Text
								style={{
									fontSize: 40,
									fontWeight: 'bold',
									marginBottom: 50,
								}}
							>
								{`Login ${
									[
										'🦸‍♀️',
										'🦸‍♂️',
										'👩‍🚀',
										'👨‍🚀',
										'👩‍💻',
										'👨‍💻',
										'👨‍🎓',
										'💂‍♂️',
										'💂‍♀️',
										'👷‍♀️',
										'🧔',
									][Math.floor(Math.random() * (12 - 1) + 0)]
								}`}
							</Text>
							<LoginForm callBack={setCurrentUser} />
							<Button
								w="full"
								marginTop="5"
								colorScheme="teal"
								onClick={onRegister}
							>
								Did not have account? Register
							</Button>
						</>
					) : null}
					{!currentUser && registered ? (
						<>
							<Text
								style={{
									fontSize: 40,
									fontWeight: 'bold',
									marginBottom: 50,
								}}
							>
								{`Register ${
									[
										'🦸‍♀️',
										'🦸‍♂️',
										'👩‍🚀',
										'👨‍🚀',
										'👩‍💻',
										'👨‍💻',
										'👨‍🎓',
										'💂‍♂️',
										'💂‍♀️',
										'👷‍♀️',
										'🧔',
									][Math.floor(Math.random() * (12 - 1) + 0)]
								}`}
							</Text>
							<RegisterForm callBack={setCurrentUser} />
							<Button
								w="full"
								marginTop="5"
								colorScheme="blue"
								onClick={onRegister}
							>
								Already have account? Sign in
							</Button>
						</>
					) : null}
				</Box>
			</Fade>
		</>
	);
}
export default Dashboard;
