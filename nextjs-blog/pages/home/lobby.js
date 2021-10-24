import React, { useState } from 'react';
import Head from 'next/head'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Link from 'next/link'
import logo from '../imgs/2.png'
import Lobby_row from '../components/Lobby_row'
//import './login.css'
//import "./Login.css"

export default function Lobby() {
  
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
    <div class="col-3">
        <div class = "row">Study groups</div>
        <div class = "row">Conferences</div>
        <div class = "row">International students</div>
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
            <Lobby_row></Lobby_row>
            <br></br>
            <Lobby_row></Lobby_row>
            <br></br>
            <Lobby_row></Lobby_row>
            <br></br>
            <Lobby_row></Lobby_row>
            <br></br>
            <Lobby_row></Lobby_row>
            <br></br>
            <Lobby_row></Lobby_row>
            <br></br>
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