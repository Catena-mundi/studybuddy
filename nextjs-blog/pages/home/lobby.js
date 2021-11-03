import React, { useState } from 'react';
import Head from 'next/head'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Link from 'next/link'
import logo from '../imgs/2.png'
import Lobby_row from '../components/Lobby_row'
import Create_event from '../components/Create_event'

//import './login.css'
//import "./Login.css"

//hacer dummy_data un state

export default function Lobby() {

  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [childData, setChildData] = useState("");
  const [, updateState] = React.useState();
 const forceUpdate = React.useCallback(() => updateState({}), []);
  let dummy_data = [
    {
      "title": "Korean study group",
      "location": "Suwon library",
      "time": "12:10"
    },
    {
      "title": "Free hoodies!",
      "location": "Seoul campus",
      "time": "13:30"
    },
    {
      "title": "SKKU AI conference",
      "location": "WebEx",
      "time": "16:00"
    }
  ];
  var namesList = dummy_data.map(function(event, index){
    return <Lobby_row dataFromParent = {event}></Lobby_row>;
  })
  const updateMyData= (datos) => {
    dummy_data.push({
      "title": "SKKU AI conference",
      "location": "WebEx",
      "time": "16:00"
    })
    namesList = dummy_data.map(function(event, index){
      return <Lobby_row dataFromParent = {event}></Lobby_row>;
    })
    console.log(dummy_data)
    forceUpdate
  }
  
    return <div class="hero-unit"><head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>

      <title>Lobby</title>
      </head>
    <main>
      <Container>
    <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">Study buddy
        <a class="navbar-brand" href="#">
        <img src={logo} width="30" height="30" alt=""/>
        </a>
    </nav>
    <br></br>
  <div class="row">
    <div class="col-3 bg-light">
        <div class = "row m-3">Study groups</div>
        <div class = "row m-3">Conferences</div>
        <div class = "row m-3">International students</div>
    </div>
    <div class="col">
        <div class = "row">
            <div class = "col-5">
                <div class="input-group rounded">
                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <span class="input-group-text border-0" id="search-addon">
                    <i class="fas fa-search"></i>
                    </span>
                </div>
            </div>
            <div class = "col">
                <Button>New event</Button>
            </div>
        </div>
        <br></br>
        <Container>
            <div class="col">{ dummy_data.map(function(event, index){
      return <Lobby_row dataFromParent = {event}></Lobby_row>;
    }) }</div>
        </Container>
    </div>
  </div>
  <Create_event passChildData={setChildData} updateParent={updateMyData}></Create_event>
</div>
        
    <Link href="/">
          <a>Back to index</a>
    </Link>
    </Container>
    </main>
    
    </div>
    
  }