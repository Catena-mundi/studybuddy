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
    const [data, setData] = useState([
        {
          "title": "Korean study group",
          "location": "Suwon library",
          "time": "12:10",
          "category": "International students"
        },
        {
          "title": "Free hoodies!",
          "location": "Seoul campus",
          "time": "13:30",
          "category": "Study Groups"
        },
        {
          "title": "SKKU AI conference",
          "location": "WebEx",
          "time": "16:00",
          "category": "Study Groups"
        }
      ]);
      const updateMyData= (datos) => {
        const aux = JSON.parse(JSON.stringify(data))
        aux.push({
          "title": datos.title,
          "location": datos.location,
          "time": datos.time,
          "category": datos.category
        })
        setData(aux)
        console.log("nuevos datos")
        console.log(data)
      }

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
                <Container>
                    <div class="card bg-dark text-white">
                        <img class="card-img" src="/imgs/skku.jpeg" alt="Card image"/>
                        <div class="card-img-overlay">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text">Last updated 3 mins ago</p>
                        </div>
                    </div>
                </Container>
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Location</Card.Title>
                                    <Card.Text>
                                        Event description
                                    </Card.Text>
                                </Card.Body>
                            </Card>
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

            </main>
    </div>
}