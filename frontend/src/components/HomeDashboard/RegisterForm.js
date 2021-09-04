import React from "react";
// import axios from "axios";
import { useFormik } from "formik";
import {
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import * as Yup from "yup";

function RegisterForm() {
  const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: Yup.object({
        username: Yup.string().required("Username can't be empty"),
        password: Yup.string("Password can't be empty")
          .min(8, "Password must be at least 8 characters")
          .required(),
        confirmPassword: Yup.string().when("password", {
          is: (val) => !!(val && val.length > 0),
          then: Yup.string().oneOf(
            [Yup.ref("password")],
            "Both password need to be the same"
          ),
        }),
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
          {touched.username && errors.username ? (
            <Text color="red">{errors.username}</Text>
          ) : null}
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
            <Text color="red">{errors.password}</Text>
          ) : null}
          <FormControl isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              id="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormControl>
          {touched.confirmPassword && errors.confirmPassword ? (
            <Text color="red">{errors.confirmPassword}</Text>
          ) : null}
          <FormControl>
            <Button colorScheme="green" type="submit">
              Register
            </Button>
          </FormControl>
        </Stack>
      </form>
    </>
  );
}

export default RegisterForm;
