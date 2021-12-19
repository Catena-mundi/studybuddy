import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format"
import parse from "date-fns/parse"
import startOfWeek from "date-fns/startOfWeek"
import getDay from "date-fns/getDate"
import "react-big-calendar/lib/css/react-big-calendar.css"
import "react-datepicker/dist/react-datepicker.css"
import React, { useState } from "react"
import DatePicker from "react-datepicker"
import Head from 'next/head'
import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Container from "react-bootstrap/Container";
import {Col, Nav, Row} from "react-bootstrap";

import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";

// used https://jquense.github.io/react-big-calendar/examples/index.html as template

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

// dummy data
// array of objects
const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2021, 12, 3),
        end: new Date(2021, 12, 3),
    },
    {
        title: "Vacation",
        start: new Date(2021, 11, 7),
        end: new Date(2021, 11, 10),
    },
    {
        title: "Conference",
        start: new Date(2021, 11, 20),
        end: new Date(2021, 11, 23),
    },
];

export default function FirstPost() {
    const [newEvent, setNewEvent] = useState({
        title: "",
        start:"",
        end: ""
    });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {

        setAllEvents([...allEvents, newEvent]);
    }

    return <div>
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
        <h1 class = "mt-4">Calendar</h1>
        <Card class="m4">
        <h2>Add New Event</h2>
        <div>
            <input type="text" placeholder="Add Title" style={{width: "20%", marginRight: "10px"}}
                   value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
            />
            <DatePicker placeholderText="Start Date" style={{marginRight: "10px"}}
                        selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})} />
            <DatePicker placeholderText="End Date"
                        selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent, end})} />
                        <Button style={{marginTop: "10px"}} onClick={handleAddEvent}> Add Event</Button>
        </div>
        </Card>

        <Calendar localizer={localizer}
                  events={allEvents}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: 500, margin: "50px" }} />
         </Container>
    </div>
    
}
