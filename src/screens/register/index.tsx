import { Container, Form } from "./styles.ts";

import Typography from "../../common/components/typography";
import Input from "../../common/components/input";
import Button from "../../common/components/button";
import { type FormEvent, useEffect } from "react";
import { useAuth } from "../../hooks";
import { useNavigate } from "react-router";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";



export default function RegisterScreen() {
  const navigate = useNavigate();
  const {
    error,
    register,
    googleSignIn,
    isAuthenticated
  } = useAuth();

  useEffect(() => {
    if (isAuthenticated) navigate("/")
  }, [isAuthenticated, navigate])

  async function handleEmailPasswordSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formElements = form.elements as typeof form.elements & {
            email: HTMLInputElement;
            password: HTMLInputElement;
        };
    await register(formElements.email.value, formElements.password.value);
  }

  return (
    <Container>
      <Typography variant="headingLg" as="div">Register</Typography>
      <Form onSubmit={handleEmailPasswordSubmit}>
        <Input placeholder="Email" name="email"/>
        <Input placeholder="Password" name="password" type="password" />
        <Button type="submit">Submit</Button>
        {error && <Typography variant="bodySm" as="p">{error}</Typography>}
      </Form>
      <Typography variant="caption" as="p">or</Typography>
      <GoogleOAuthProvider clientId='617077149465-hl0afq35fdonkeka35amgahcl7kliuej.apps.googleusercontent.com'>
        <GoogleLogin
          onSuccess={googleSignIn}
        />
      </GoogleOAuthProvider>
    </Container>
  )
}
