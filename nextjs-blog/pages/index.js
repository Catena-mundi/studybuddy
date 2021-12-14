import React, { useState } from 'react';
import Head from 'next/head'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Link from 'next/link'
import GoogleLogin from 'react-google-login';
import Navbar from 'react-bootstrap/Navbar'
import {Col, Nav, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
//import './login.css'
//import "./Login.css"

/*
import Link from 'next/link'
import LoginButton from "./loginButton";
import LogoutButton from "./logoutButton";

export default function FirstPost() {
    return <div className = "login">
    <h1 className="title">
*/

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
                    <Nav.Link href="/home/homepage">Home</Nav.Link>
                    <Nav.Link href="/home/lobby">Lobby</Nav.Link>
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
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
      </div>
      <div class = "col"></div>
      
  <br></br>
        
    <Link href="/">
          <a>Back to index</a>
    </Link>
    </Container>
    </main>
    

    </div>
    /*
    <LoginButton/>
        <LogoutButton/>
 
    */
  }
