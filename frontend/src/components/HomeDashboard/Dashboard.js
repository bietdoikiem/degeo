import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import RoomData from "./RoomData";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import ChatContainer from "../../containers/ChatContainer";

function Dashboard() {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const [registered, setRegistered] = useState(false);
  const currentUser = !localStorage.getItem("currentUser");

  const onRegister = () => {
    setRegistered(!registered);
  };

  return (
    <>
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
            <ChatContainer />
          </Box>
        )}
        {!currentUser && !registered ? (
          <>
            <RoomData />
            <LoginForm />
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
            <RegisterForm />
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
    </>
  );
}
export default Dashboard;
