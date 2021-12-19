import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from "react-bootstrap/Container";
import {Col, Nav, Row} from "react-bootstrap";
import {GoogleLogout} from "react-google-login";

const responseGoogle = (response) => {
    console.log(response);
    window.location.href = "http://localhost:3000/";
  }

function Nav_bar() {

return <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">StudyBuddy</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/home/homepage">Home</Nav.Link>
                    <Nav.Link href="/home/lobby">Lobby</Nav.Link>
                    <Nav.Link href="/home/calendar">My events</Nav.Link>
                    <Nav.Link href="/home/create">Create event</Nav.Link>
                    <GoogleLogout
                        clientId="1023237436999-c8vqvl58fregldvfm0m1icosgsld0hth.apps.googleusercontent.com"
                        buttonText="Logout"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                    >
                    </GoogleLogout>
                </Nav>
            </Container>
        </Navbar>
;}
export default Nav_bar