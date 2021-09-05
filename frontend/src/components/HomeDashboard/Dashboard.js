import React, { useState } from "react";
import {
  Box,
  Button,
  useDisclosure,
  Fade,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import RoomData from "./RoomData";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import ChatContainer from "../../containers/ChatContainer";

function Dashboard() {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const [registered, setRegistered] = useState(false);
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("currentUser")
  );
  const { isOpen, onToggle } = useDisclosure();
  const onRegister = () => {
    setRegistered(!registered);
  };

  return (
    <>
      <IconButton
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
          w={["full", "400px", "500px"]}
        >
          {currentUser && (
            <Box>
              <Button
                w="full"
                marginTop="5"
                colorScheme="blue"
                onClick={onRegister}
              >
                Random location 🌎
              </Button>
              <ChatContainer callBack={setCurrentUser} />
            </Box>
          )}
          {!currentUser && !registered ? (
            <>
              <RoomData />
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
              <RoomData />
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
