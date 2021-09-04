/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import { List, ListItem } from "@chakra-ui/react";
import axios from "axios";

function RoomData() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("")
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        console.error(err);
      });
  });
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
