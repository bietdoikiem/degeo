import React, { useState, useEffect } from "react";
import { Box, Button } from "@chakra-ui/react";
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
  // Some function here to force the page reload while localStorage change (in the child component Login/Register/Logout)

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
    </>
  );
}
export default Dashboard;
