import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import axios from "axios";

const Container = styled.div`
  width: 66%;
  background-color: whitesmoke;
  color: black;
  display: flex;
  flex-direction: column;
  margin: 3rem auto;
  padding: 2rem;
  border-radius: 0.5rem;

  @media (max-width: 800px) {
    width: 90%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
  margin: 0 auto;
`;

const ErrorMessage = styled.h6`
  display: ${(props: { error: boolean }) => (props.error ? "block" : "hidden")};
  color: red;
`;

const AdminLoginPage = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("/api/auth", { username, password });

      localStorage.setItem("token", res.data.token);

      return () => router.push("/admin");
    } catch (err) {
      if (err.response.status === 401) {
        setError(err.response.data.message);
      }
    }
  };

  return (
    <div>
      <Head>
        <title>Admin Login</title>
      </Head>

      <Container>
        <Form method="POST" onSubmit={handleSubmit}>
          <TextField
            name="username"
            id="username"
            label="Username"
            placeholder="Admin Username"
            value={username}
            type="text"
            error={error.length > 0}
            onChange={(e) => {
              setUsername(e.target.value);
              setError("");
            }}
          />
          <TextField
            name="password"
            id="password"
            label="Password"
            placeholder="Admin Password"
            value={password}
            type="password"
            error={error.length > 0}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
          />
          <input type="submit" value="Login" />
          <ErrorMessage error={error.length > 0}>{error}</ErrorMessage>
        </Form>
      </Container>
    </div>
  );
};

export default AdminLoginPage;
