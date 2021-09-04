import React from "react";
import {
  Badge,
  Box,
  Center,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import * as moment from "moment";

const mockCurrentUser = {
  email: "cqtin0903@gmail.com",
};
const mockMessages = [
  {
    sender: "cqtin0903@gmail.com",
    body: "Hi there",
    createdAt: moment().unix(),
  },
  {
    sender: "cqtin0903@gmail.com",
    body: "How are you",
    createdAt: moment().subtract(5, "minutes").unix(),
  },
  {
    sender: "userA@gmail.com",
    body: "Toi ten la Tin",
    createdAt: moment().subtract(10, "minutes").unix(),
  },
  {
    sender: "userB@gmail.com",
    body: "RMIT University",
    createdAt: moment().subtract(2, "minutes").unix(),
  },
  {
    sender: "cqtin0903@gmail.com",
    body: "Hi there. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cez",
    createdAt: moment().unix(),
  },
  {
    sender: "cqtin0903@gmail.com",
    body: "How are you",
    createdAt: moment().subtract(5, "minutes").unix(),
  },
  {
    sender: "userA@gmail.com",
    body: "Toi ten la Tin",
    createdAt: moment().subtract(10, "minutes").unix(),
  },
  {
    sender: "userB@gmail.com",
    body: "RMIT University",
    createdAt: moment().subtract(2, "minutes").unix(),
  },
];

const ChatContainer = () => {
  const [formValues, setFormValue] = React.useState({
    username: "",
    password: "",
    message: "",
  });

  const handleSend = () => {};

  return (
    <Box marginTop="5">
      <Center>
        <Box shadow="md" h="600" w="full">
          <Box bg="white" shadow="md" w="100%" p={4} color="white">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              20 Online 😉
            </Badge>
          </Box>
          <Box h="450" p="5" overflow="auto">
            {mockMessages.map((message) =>
              mockCurrentUser.email === message.sender ? (
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

export default ChatContainer;
