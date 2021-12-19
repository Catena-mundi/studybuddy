import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format"
import parse from "date-fns/parse"
import startOfWeek from "date-fns/startOfWeek"
import getDay from "date-fns/getDate"
import "react-big-calendar/lib/css/react-big-calendar.css"
import "react-datepicker/dist/react-datepicker.css"
import React, { useState, useEffect } from "react"
import DatePicker from "react-datepicker"
import Head from 'next/head'
import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Nav_bar from '../components/nav_bar'
import Container from "react-bootstrap/Container";
import {Col, Nav, Row} from "react-bootstrap";

import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";

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

function get(url) {
    const requestOptions = {
        method: 'GET',
    };
    return fetch(url, requestOptions)
    .then(data => {
        return data.text();
    });
}
  
function post(url, body) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(body)
    };
    return fetch(url, requestOptions)
    .then(data => {
        return data.text();
    });;
}

export default function FirstPost() {
    const [newEvent, setNewEvent] = useState({
        title: "",
        start:"",
        end: ""
    });
    const [allEvents, setAllEvents] = useState([]);

    useEffect(() => {
        get('http://localhost:3000/api/events/getEvents')
        .then(data => {
            setAllEvents(JSON.parse(data).map(e => {
                e.start = new Date(e.start);
                e.end = new Date(e.end);
                return e;
            }));
        })
    }, []);

    function handleAddEvent() {
        let event = {
            title: newEvent.title,
            location: '',
            time: '',
            category: 'Any',
            allDay: false,
            start: newEvent.start,
            end: newEvent.end,
            joined: true, 
        }
        post('http://localhost:3000/api/events/create', event)
        .then(data => {
            setAllEvents(JSON.parse(data));
        })
    }


    return <div>
        <Nav_bar></Nav_bar>
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
                  events={allEvents.filter(event => event?.joined === true)}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: 500, margin: "50px" }} />
         </Container>
    </div>
    
}
