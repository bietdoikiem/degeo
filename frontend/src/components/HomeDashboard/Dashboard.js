import React, { useState } from "react";

import {
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import LoginForm from "./LoginForm";
import RoomData from "./RoomData";
import RegisterForm from "./RegisterForm";

function Dashboard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [register, setRegister] = useState(false);

  const onRegister = () => {
    setRegister(!register);
  };

  return (
    <>
      <Button onClick={onOpen}>Open</Button>
      <Drawer
        placement="left"
        isOpen={isOpen}
        onClose={onClose}
        size="md"
        trapFocus={false}
        closeOnOverlayClick={false}
      >
        {/* <DrawerOverlay /> */}
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Room Details</DrawerHeader>

          <DrawerBody>
            <RoomData />
            {!register ? (
              <>
                <LoginForm />{" "}
                <Button colorScheme="teal" onClick={onRegister}>
                  Did not have account? Register
                </Button>
              </>
            ) : null}
            {register ? (
              <>
                <RegisterForm />
                <Button colorScheme="blue" onClick={onRegister}>
                  Already have account? Sign in
                </Button>
              </>
            ) : null}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default Dashboard;
