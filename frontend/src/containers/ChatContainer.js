/* eslint-disable no-nested-ternary */
import React from 'react';
import {
  Badge,
  Box,
  Center,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from '@chakra-ui/react';
import { io } from 'socket.io-client';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

let roomUser;

const socket = io(process.env.REACT_APP_API_URL);

socket.on('roomUsers', (data) => {
  roomUser = data.users;
});

const ChatContainer = ({ room }) => {
  const auth = useSelector((state) => state.auth);
  const [messages, setMessages] = React.useState([]);
  const [formValues, setFormValue] = React.useState({
    username: '',
    password: '',
    message: '',
  });

  React.useEffect(() => {
    socket.emit('joinRoom', {
      username: auth?.currentUser?.username,
      room,
    });
  }, []);

  const handleSend = () => {
    socket.emit('chatMessage', formValues.message);
  };

  socket.on('message', (data) => {
    if (data) {
      setMessages([
        ...messages,
        {
          sender: data.username,
          body: data.text,
          createdAt: data.time,
        },
      ]);
    }
  });

  return (
    <Box marginTop="5">
      <Center>
        <Box shadow="md" h="600" w="full">
          <Box bg="white" shadow="md" w="100%" p={4} color="white">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              {roomUser?.length} Online 😉
            </Badge>
          </Box>
          <Box h="450" p="5" overflow="auto">
            {messages.map((message) =>
              message.sender === auth?.currentUser?.username ? (
                <Box w="100%">
                  <Text marginBottom="1">😗 You</Text>
                  <Box
                    borderRadius="10"
                    bg="teal.400"
                    w="fit-content"
                    marginBottom="3"
                    color="white"
                    p="2"
                  >
                    <Text>{message.body}</Text>
                  </Box>
                </Box>
              ) : message.sender === 'SYSTEM' ? (
                <Text marginBottom="1" alignItems="center" textAlign="center">
                  {message.body}
                </Text>
              ) : (
                <Box w="100%">
                  <Text marginBottom="1">{message.sender}</Text>
                  <Box
                    borderRadius="10"
                    bg="blue.400"
                    w="fit-content"
                    marginBottom="3"
                    color="white"
                    p="2"
                  >
                    <Text>{message.body}</Text>
                  </Box>
                </Box>
              )
            )}
          </Box>
          <Center>
            <Box w="90%" marginTop="2">
              <InputGroup size="md">
                <Input
                  onChange={(e) =>
                    setFormValue({
                      ...formValues,
                      message: e.target.value,
                    })
                  }
                  pr="4.5rem"
                  type="text"
                  placeholder="Enter your message"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleSend}>
                    Send
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Box>
          </Center>
        </Box>
      </Center>
    </Box>
  );
};

ChatContainer.propTypes = {
  room: PropTypes.string,
};

export default ChatContainer;
