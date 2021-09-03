import React from "react";

import {
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import LoginForm from "./LoginForm";

function Dashboard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open</Button>
      <Drawer placement="left" isOpen={isOpen} onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Room Details</DrawerHeader>

          <DrawerBody>
            <LoginForm />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Dashboard;
