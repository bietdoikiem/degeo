import React, { useState } from "react";
import { useFormik } from "formik";
import { Stack, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import * as Yup from "yup";

function LoginForm() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      validationSchema: Yup.object({
        username: Yup.string()
          .max(10, "Username must be shorter than 10 characters")
          .required("Required"),
        password: Yup.string()
          .min(6, "Password should be longer than 6 characters")
          .required(),
      }),
      onSubmit: ({ username, password }) => {
        alert(`username: ${username}, password: ${password}`);
      },
    });
  return (
    <>
      <form method="POST" onSubmit={handleSubmit}>
        <Stack>
          <FormControl isRequired>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              id="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormControl>
          {touched.password && errors.password ? (
            <div>{errors.password}</div>
          ) : null}
          <FormControl>
            <Button colorScheme="blue" type="submit">
              Log in
            </Button>
          </FormControl>
        </Stack>
      </form>
    </>
  );
}

export default LoginForm;
