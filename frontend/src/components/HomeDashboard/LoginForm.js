import React from "react";
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
import { useDispatch } from "react-redux";
import { login } from "../../redux/ducks/auth/actions";

function LoginForm(props) {
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      validationSchema: Yup.object({
        username: Yup.string().required("Username can't be empty!"),
        password: Yup.string().required("Password can't be empty!"),
      }),
      onSubmit: async (v) => {
        await dispatch(login({ username: v.username, password: v.password }));
        // eslint-disable-next-line react/prop-types
        await props.callBack(localStorage.getItem("currentUser"));
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
          <FormControl>
            <Button w="full" marginTop="5" colorScheme="blue" type="submit">
              Log in to join the room!
            </Button>
          </FormControl>
        </Stack>
      </form>
    </>
  );
}

export default LoginForm;
