import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Link from 'next/link'
import Lobby_row from '../components/Lobby_row'
import Create_event from '../components/Create_event'
import Navbar from 'react-bootstrap/Navbar'
import Nav_bar from '../components/nav_bar'
import Container from "react-bootstrap/Container";
import {Col, Nav, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";

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
      category: datos.category,
      allDay: false,
      start: new Date(),
      end: new Date()
    }

    post('http://localhost:3000/api/events/create', event)
    .then(data => {
      setData(JSON.parse(data));
    })

    console.log("nuevos datos")
    console.log(data)
  }
  const orderData = (d) => {
    return d.sort(function(a,b){
      return new Date(a.start) - new Date(b.start)
    });
  }
  const filterDate = (d) => {
    return d.filter(el => new Date(el.start) > new Date())
  }
  const filterJoined = (d) => {
    return d.filter(el => !el?.joined)
  }
  const filterData = (d, c) => {
    d = orderData(filterDate(filterJoined(d)))
    console.log(d)
    if (category == "Any"){
      return filterLocation(d);
    }else{
      return filterLocation(d).filter(el => el.category.search(c) !== -1)
    }
  }
  const filterLocation = (d) => {
    if (location == "Any"){
      return d;
    }else{
      return d.filter(el => el?.location?.search(location) !== -1)
    }
  }
  useEffect(() => {
    get('http://localhost:3000/api/events/getEvents')
    .then(data => {
      setData(JSON.parse(data));
    })
  }, []);
  const goToCreate = () =>{
    
    window.location.href = "http://localhost:3000/home/create"
  }

    return <div className="hero-unit"><head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>

      <title>Lobby</title>
      </head>
    <main>
      <Nav_bar></Nav_bar>
      <Container>
    <div className="container">
    <br></br>
  <div className="row">
    <div className="col-3 bg-light">
        <Button className= "mt-3 mb-3" onClick = {
    goToCreate}>Create a new event</Button>
    <br></br>
    <h4>Filter events by category</h4>
    <select class = "form-select" value={category} onChange = {(e) => setCategory(e.target.value)}>
      <option value="Any" selected>Any</option>
      <option value="Study Groups">Study Groups</option>
      <option value="Conferences">Conferences</option>
      <option value="Outdoors activities">Outdoors activities</option>
      <option value="International students">International students</option>
    </select>
    <br></br>
    <h4>Filter events by location</h4>
    <select class = "form-select" value={location} onChange = {(e) => setLocation(e.target.value)}>
      <option value="Any" selected>Any</option>
      <option value="Online">Online</option>
      <option value="Seoul Campus">Seoul Campus</option>
      <option value="Suwon Campus">Suwon Campus</option>
      <option value="Outside of Campus">Outside of Campus</option>
    </select>

    </div>
    <div className="col">
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
