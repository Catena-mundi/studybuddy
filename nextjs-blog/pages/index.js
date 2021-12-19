import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import GoogleLogin from 'react-google-login';
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  
  function handleSubmit(event) {
    event.preventDefault();
  }

  const responseGoogle = (response) => {
    console.log(response);
    window.location.href = "http://localhost:3000/home/homepage";
  }
  
    return <div class="hero-unit"><head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
      <title>Login</title>
      </head>
    <main>
    <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">StudyBuddy</Navbar.Brand>
                <Nav className="me-auto">
                </Nav>
            </Container>
        </Navbar>
      <Container>

    <h1 className="title mt-3">
          Welcome to study buddy
    </h1>
    <div class = "col"></div>
    <div class = "col-6">
    <Form onSubmit={handleSubmit} class = "mb-3">
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
      <GoogleLogin
    clientId="1023237436999-c8vqvl58fregldvfm0m1icosgsld0hth.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
      </div>
      <div class = "col"></div>
    </Container>
    </main>
    

    </div>
  }
