import React from "react";
import { useFormik } from "formik";
import { Stack, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/ducks/auth/actions";

function LoginForm() {
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        email: Yup.string().required("Email can't be empty"),
        password: Yup.string().required("Password can't be empty"),
      }),
      onSubmit: (v) => {
        dispatch(login({ email: v.email, password: v.password }));
      },
    });

  return (
    <>
      <form method="POST" onSubmit={handleSubmit}>
        <Stack>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="text"
              id="email"
              value={values.email}
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
