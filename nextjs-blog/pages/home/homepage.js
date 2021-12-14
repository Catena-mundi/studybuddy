import Head from 'next/head'
import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Container from "react-bootstrap/Container";
import {Col, Nav, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";

/*
* have to make a function where it makes all the cards corresponding to all the services that we have*/

export default function FirstPost() {
    return <div><Head><title>Homepage</title></Head>
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">StudyBuddy</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/home/homepage">Home</Nav.Link>
                    <Nav.Link href="/home/lobby">Lobby</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <main>
            <h1 className="title">Homepage</h1>
            <br></br>
            <Container>
            <Row>
                <Col class="col-4">
                    <Card onClick={event =>  window.location.href='/home/create'} style={{ cursor: "pointer" }}>
                        <Card.Img class = "mt-5" variant="top" src="/imgs/page.png" />
                        <Card.Body>
                            <Card.Title>Create a new event</Card.Title>
                            <Card.Text>
                                Start an event right now or schedule one for later
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col class="col-4">
                    <Card onClick={event =>  window.location.href='/home/lobby'} style={{ cursor: "pointer" }}>
                        <img class = "mt-5" src="/imgs/event.png" />
                        <Card.Body>
                            <Card.Title>Lobby</Card.Title>
                            <Card.Text>
                                Find current or future events according to your interests
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col class="col-4">
                    <Card onClick={event =>  window.location.href='/home/calendar'} style={{ cursor: "pointer" }}>
                        <Card.Img class = "mt-5" variant="top" src="/imgs/calendar.png" />
                        <Card.Body>
                            <Card.Title>My calendar</Card.Title>
                            <Card.Text>
                                See your events or change your availability.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col class="col-4">
                    <Card>
                        <Card.Img class = "mt-5" variant="top" src="/imgs/event.png" />
                        <Card.Body>
                            <Card.Title>Lobby</Card.Title>
                            <Card.Text>
                                Find current or future events according to your interests
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Container>
        </main>
    <style jsx>{`
    main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: 10%;
        margin-left: 10%;
      }
    .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

    `}</style>
    </div>
  }
