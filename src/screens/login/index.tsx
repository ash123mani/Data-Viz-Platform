import { Container, Form } from "./styles.ts";

import Typography from "../../common/components/typography";
import Input from "../../common/components/input";
import Button from "../../common/components/button";
import { type FormEvent, useEffect } from "react";
import { useAuth } from "../../hooks";
import { useNavigate } from "react-router";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

export default function LoginScreen() {
  const navigate = useNavigate();
  const {
    error,
    clearError,
    login,
    isAuthenticated,
    googleSignIn
  } = useAuth();

  useEffect(() => {
    if (isAuthenticated) navigate("/")
  }, [isAuthenticated, navigate])

  useEffect(() => {
    return () => {
      if (error) clearError()
    }
  }, [error]);

  async function handleEmailPasswordSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formElements = form.elements as typeof form.elements & {
            email: HTMLInputElement;
            password: HTMLInputElement;
        };
    await login(formElements.email.value, formElements.password.value);
  }

  return (
    <Container>
      <Typography variant="headingLg">Login</Typography>
      <Form onClick={handleEmailPasswordSubmit}>
        <Input placeholder="Email" name="email" />
        <Input placeholder="Password" name="password" />
        <Button type="submit">Login</Button>
        {error && <Typography variant="bodySm" as="p">{error}</Typography>}

      </Form>
      <Typography variant="caption" as="p">or</Typography>
      <GoogleOAuthProvider clientId='617077149465-hl0afq35fdonkeka35amgahcl7kliuej.apps.googleusercontent.com' >
        <GoogleLogin
          onSuccess={googleSignIn}
        />
      </GoogleOAuthProvider>
    </Container>
  )
}
