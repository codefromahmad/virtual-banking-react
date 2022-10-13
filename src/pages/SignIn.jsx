import React from "react";
import {
  Button,
  Email,
  ForgotPswd,
  Label,
  Password,
  SigninContainer,
  SigninForm,
  SigninWrapper,
  Title,
} from "../components/SignIn/SignInElements";

const SignIn = () => {
  return (
    <SigninContainer>
      <SigninWrapper>
        <SigninForm>
          <Title>Sign in to your account</Title>
          <Label>Email</Label>
          <Email type="email"></Email>
          <Label>Password</Label>
          <Password type="password"></Password>
          <Button>Continue</Button>
          <ForgotPswd>Forgot password</ForgotPswd>
        </SigninForm>
      </SigninWrapper>
    </SigninContainer>
  );
};

export default SignIn;
