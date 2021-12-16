import Head from 'next/head'
import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'

import Nav_bar from '../components/nav_bar'
import Container from "react-bootstrap/Container";
import {Col, Nav, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";

/*
* have to make a function where it makes all the cards corresponding to all the services that we have*/

function HomeCard({ href, title, text, img }) {
    const link = '/home/'+ href;
    const imgURL = '/imgs/' + img

    return (
        <Card className="m-3" onClick={event =>  window.location.href = link} style={{ cursor: "pointer" }}>
            <Card.Header style={{ height: '5rem' }}>
                <Card.Title> {title} </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{text}</Card.Subtitle>
            </Card.Header>
            <Card.Img className="w-50 mx-auto d-block m-3" variant="top" src={imgURL} />
        </Card>
    );
}


const homeCards = [
    {
        title: 'Create a new event',
        text: 'Start an event right now or schedule one for later',
        href: 'create',
        img: "page.png"
    },
    {
        title: 'Lobby',
        text: 'Find current or future events according to your interests',
        href: 'lobby',
        img: "event.png"
    },
    {
        title: 'My calendar',
        text: 'See your events or change your availability.',
        href: 'calendar',
        img: "calendar.png"
    },
    {
        title: 'Lobby',
        text: 'Find current or future events according to your interests',
        href: 'lobby',
        img: "event.png"
    },
]

export default function FirstPost() {
    return <div><Head><title>Homepage</title></Head>
        <Nav_bar></Nav_bar>
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
