import React from "react";
import { useFormik } from "formik";
import { Stack, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import * as Yup from "yup";

function LoginForm() {
  const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      validationSchema: Yup.object({
        username: Yup.string().required("Username can't be empty"),
        password: Yup.string().required("Password can't be empty"),
      }),
      onSubmit: (v) => {
        alert(JSON.stringify(v, null, 2));
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
              Log in to join the room!
            </Button>
          </FormControl>
        </Stack>
      </form>
    </>
  );
}

export default LoginForm;
