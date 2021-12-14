import Head from 'next/head'
import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Container from "react-bootstrap/Container";
import {Col, Nav, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";

/*
* have to make a function where it makes all the cards corresponding to all the services that we have*/

function HomeCard({ href, title, text, img }) {
    const link = '/home/'+ href;

    return (
        <Card onClick={event =>  window.location.href = link} style={{ cursor: "pointer" }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title> {title} </Card.Title>
                <Card.Text> {text} </Card.Text>
            </Card.Body>
        </Card>
    );
}

const homeCards = [
    {
        title: 'Create a new event',
        text: 'Start an event right now or schedule one for later',
        href: 'create',
        img: "/imgs/page.png"
    },
    {
        title: 'Lobby',
        text: 'Find current or future events according to your interests',
        href: 'lobby',
        img: "/imgs/event.png"
    },
    {
        title: 'My calendar',
        text: 'See your events or change your availability.',
        href: 'calendar',
        img: "/imgs/calendar.png"
    },
    {
        title: 'Lobby',
        text: 'Find current or future events according to your interests',
        href: 'lobby',
        img: "/imgs/event.png"
    },
]

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
                {homeCards.map((card, i) => (
                    <Col md={6} key={i}>
                         <HomeCard
                            title={card.title}
                            text={card.text}
                            href={card.href}
                            img={card.img}
                         />
                    </Col>
                ))}
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
