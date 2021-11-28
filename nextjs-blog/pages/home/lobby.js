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
  const [data, setData] = useState([
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
  ]);
  const updateMyData= (datos) => {
    const aux = JSON.parse(JSON.stringify(data))
    aux.push({
      "title": datos.title,
      "location": datos.location,
      "time": datos.time
    })
    setData(aux)
    console.log("nuevos datos")
    console.log(data)
  }
  
    return <div className="hero-unit"><head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>

      <title>Lobby</title>
      </head>
    <main>
      <Container>
    <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">Study buddy
        <a className="navbar-brand" href="#">
        <img src={logo} width="30" height="30" alt=""/>
        </a>
    </nav>
    <br></br>
  <div className="row">
    <div className="col-3 bg-light">
    <Create_event passChildData={setChildData} updateParent={updateMyData}></Create_event>
        <div className = "row m-3">Study groups</div>
        <div className = "row m-3">Conferences</div>
        <div className = "row m-3">International students</div>
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
            <div className="col">{ data.map(function(event, index){
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