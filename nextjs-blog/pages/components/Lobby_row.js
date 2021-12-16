import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import moment from 'moment';

function Lobby_row(props) {

    const [show, setShow] = useState(false);
    const [allEvents, setAllEvents] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const goToCalendar = () =>{
        
        window.location.href = "http://localhost:3000/home/calendar"
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
        }).then(goToCalendar);
        ;
      }


    function handleAddEvent() {
        let event = {
            title: props.dataFromParent.title,
            location: props.dataFromParent.location,
            time: props.dataFromParent.time,
            category: props.dataFromParent.category,
            allDay: false,
            joined: true,
            start: props.dataFromParent.start,
            end: props.dataFromParent.end
        }
        post('http://localhost:3000/api/events/create', event)
        .then(data => {
            setAllEvents(JSON.parse(data));
        })
    }
    
    var image = "/imgs/skku.jpeg"
    if(props.dataFromParent.location == "Seoul Campus"){
        image= "/imgs/skku1.png"
    }else if(props.dataFromParent.location == "Online"){
        image = "/imgs/online.jpeg"
    }

    return <div class = "row mb-3">
        <div class = "col">{moment(props.dataFromParent.start).format('DD MMM, YYYY')}</div>
        <div class = "col">{props.dataFromParent.time}</div>
        <div class = "col">{props.dataFromParent.title}</div>
        <div class = "col">{props.dataFromParent.location}</div>
        
        <div class = "col">
            <Button onClick={handleShow}>Join now</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Event Details</Modal.Title>
                </Modal.Header>
                <div class="card text-dark">
                        <img class="card-img" src={image} alt="Card image"/>
                <Modal.Body>
                    <h3 class = "card-title">{props.dataFromParent.title}</h3>
                    <div>{props.dataFromParent.time}</div>
                    <div>{props.dataFromParent.description}</div>
                    <div>{props.dataFromParent.location}</div>
                    <br></br>
                <Button onClick={handleAddEvent}>Add to Calendar</Button>
                </Modal.Body>
                </div>
            </Modal>
        </div>
    </div>;
}
export default Lobby_row