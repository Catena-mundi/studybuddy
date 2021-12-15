import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Link from 'next/link'
import Lobby_row from '../components/Lobby_row'
import Create_event from '../components/Create_event'
import Navbar from 'react-bootstrap/Navbar'
import Container from "react-bootstrap/Container";
import {Col, Nav, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";

//import './login.css'
//import "./Login.css"

//hacer dummy_data un state

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

export default function Lobby() {

  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("Any");
  const [childData, setChildData] = useState("");
  const [data, setData] = useState([]);

  const updateMyData= (datos) => {
    let event = {
      title: datos.title,
      location: datos.location,
      time: datos.time,
      category: datos.category
    }

    post('http://localhost:3000/api/events/create', event)
    .then(data => {
      setData(JSON.parse(data));
    })

    console.log("nuevos datos")
    console.log(data)
  }
  const filterData = (d, c) => {
    if (category == "Any"){
      return d;
    }else{
      return d.filter(el => el.category.search(c) !== -1)
    }
  }
  useEffect(() => {
    get('http://localhost:3000/api/events/getEvents')
    .then(data => {
      setData(JSON.parse(data));
    })
  }, []);

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
    <div className="container">
    <br></br>
  <div className="row">
    <div className="col-3 bg-light">
    <Create_event passChildData={setChildData} updateParent={updateMyData}></Create_event>
    <br></br>
    <h4>Filter events by category</h4>
    <select class = "form-select" value={category} onChange = {(e) => setCategory(e.target.value)}>
      <option value="Any" selected>Select One</option>
      <option value="Study Groups">Study Groups</option>
      <option value="Conferences">Conferences</option>
      <option value="Outdoors activities">Outdoors activities</option>
      <option value="International students">International students</option>
    </select>

    </div>
    <div className="col">
        <div className = "row">
            <div className = "col-5">
                <div className="input-group rounded">
                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <span className="input-group-text border-0" id="search-addon">
                    <i className="fas fa-search"></i>
                    </span>
                </div>
            </div>
            <div className = "col">
                <Button>New event</Button>
            </div>
        </div>
        <br></br>
        <Container>
            <div className="col">{ filterData(data, category).map(function(event, index){
              return <Lobby_row key = {index} dataFromParent = {event}></Lobby_row>;
            }) }</div>
        </Container>
    </div>
  </div>
  
</div>
        
    <Link href="/">
          <a>Back to index</a>
    </Link>
    </Container>
    </main>
    
    </div>
    
  }