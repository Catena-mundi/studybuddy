import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
function Create_event(props) {

    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");
    const [location, setLocation] = useState("");
    const [category, setCategory] = useState("");
    function handleSubmit(event) {
        const objeto = {title,time,location}
        props.passChildData(event.title);
        event.preventDefault();
        props.updateParent(objeto)
        console.log(objeto)
      }
    
    //title, time when it starts, how many people we need, user
    return <div>
      
    <Container>
        <Card >
            <Card.Body>
                <Card.Title>New event</Card.Title>
                <Card.Text>
                    Connect with other students!
                </Card.Text>
                <Form onSubmit={handleSubmit} class = "mb-3">
        <Form.Group size="lg" controlId="title">
          <Form.Label>Event title</Form.Label>
          <Form.Control
            autoFocus
            type="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="time">
          <Form.Label>Start time</Form.Label>
          <Form.Control
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </Form.Group>
        <Form.Group size = "lg" controlId = "category">
          <Form.Label>Category</Form.Label>
          
          <select class = "form-select" value={category} onChange = {(e) => setCategory(e.target.value)}>
            <option value="Any" selected>Select One</option>
            <option value="Study Groups">Study Groups</option>
            <option value="Conferences">Conferences</option>
            <option value="Outdoors activities">Outdoors activities</option>
            <option value="International students">International students</option>
          </select>
        </Form.Group>

        <Form.Group size="lg" controlId="location">
          <Form.Label>Event location</Form.Label>
          <Form.Control
            type="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Form.Group>

        <Button block size="lg" type="submit">
          Create
        </Button>
      </Form>
  </Card.Body>
</Card>
    </Container>
    </div>;
}
export default Create_event