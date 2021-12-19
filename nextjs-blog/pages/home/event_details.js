import React, { useState } from 'react';
import Head from 'next/head'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Link from 'next/link'
import Lobby_row from '../components/Lobby_row'
import Create_event from '../components/Create_event_big'
import Navbar from 'react-bootstrap/Navbar'
import Container from "react-bootstrap/Container";
import {Col, Nav, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";

export default function Create() {
    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");
    const [location, setLocation] = useState("");
    const [category, setCategory] = useState("Any");
    const [childData, setChildData] = useState("");
    const [data, setData] = useState([]);

    /*useEffect(() => {
        get('http://localhost:3000/api/events/getEvents')
        .then(data => {
          setData(JSON.parse(data));
        })
    }, []);*/

    return <div className="hero-unit"><head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>

      <title>Lobby</title>
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
                    
                    <div class="card bg-dark text-dark">
                        <img class="card-img" src="/imgs/skku.jpeg" alt="Card image"/>
                        <div class="card-img-overlay">
                            <Container>

                            <h5 class="card-title">{thisEvent.title}</h5>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{thisEvent.location}</Card.Title>
                                    <Card.Text>
                                        Event description
                                    </Card.Text>
                                    <Card.Text>
                                        {thisEvent.time}
                                    </Card.Text>
                                    <Card.Text>
                                        {thisEvent.category}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <br></br>
                            <Button>Add to calendar</Button>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Text>
                                        Chat room
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                            
                        </div>
                    </div>
                

            </main>
    </div>
}