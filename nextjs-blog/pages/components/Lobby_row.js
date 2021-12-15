import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Lobby_row(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return <div class = "row mb-3">
        <div class = "col">{props.dataFromParent.time}</div>
        <div class = "col">{props.dataFromParent.title}</div>
        <div class = "col">{props.dataFromParent.location}</div>
        <div class = "col">
            <Button onClick={handleShow}>Join now</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Event Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div>{props.dataFromParent.time}</div>
                <div>{props.dataFromParent.title}</div>
                <div>{props.dataFromParent.location}</div>
                <Button onClick={handleShow}>Add to Calendar</Button>
                </Modal.Body>
            </Modal>
        </div>
        <div class = "col">...</div>
    </div>;
}
export default Lobby_row