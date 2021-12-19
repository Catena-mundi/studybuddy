import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Link from 'next/link'
import Lobby_row from '../components/Lobby_row'
import Create_event from '../components/Create_event_big'
import Nav_bar from '../components/nav_bar'
import Navbar from 'react-bootstrap/Navbar'
import Container from "react-bootstrap/Container";
import {Col, Nav, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

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
    }).then(goToLobby);
    ;
  }

  const goToLobby = () =>{
    
    window.location.href = "http://localhost:3000/home/lobby"
  }

export default function Create() {
    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");
    const [location, setLocation] = useState("");
    const [category, setCategory] = useState("Any");
    const [childData, setChildData] = useState("");
    const [data, setData] = useState([
        {
          "title": "Korean study group",
          "location": "Suwon library",
          "time": "12:10",
          "category": "International students"
        },
        {
          "title": "Free hoodies!",
          "location": "Seoul campus",
          "time": "13:30",
          "category": "Study Groups"
        },
        {
          "title": "SKKU AI conference",
          "location": "WebEx",
          "time": "16:00",
          "category": "Study Groups"
        }
      ]);
      const updateMyData= (datos) => {
        let event = {
          title: datos.title,
          location: datos.location,
          time: datos.time,
          category: datos.category,
          allDay: false,
          start: new Date(datos.start),
          end: new Date(datos.end),
          description: datos.description
        }
    
        post('http://localhost:3000/api/events/create', event)
        .then(data => {
          setData(JSON.parse(data));
        })
    
        console.log("nuevos datos")
        console.log(data)
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
            <Nav_bar></Nav_bar>
                <Container class="mt-5">
                <Create_event passChildData={setChildData} updateParent={updateMyData}></Create_event>
                </Container>

            </main>
    </div>
}
