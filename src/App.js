import React, { Component } from 'react';

import './App.css';

import Navbar from "./components/Navbar"
import MeetupHeader from "./components/MeetupHeader"
import NextMeetup from "./components/NextMeetup"
import AboutMeetup from './components/AboutMeetup';
import Member from "./components/Member"
import PastMeetup from "./components/PastMeetup"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <MeetupHeader></MeetupHeader>
        <NextMeetup></NextMeetup>
        <AboutMeetup></AboutMeetup>
        <Member></Member>
        <PastMeetup></PastMeetup>
      </div>
    );
  }
}

export default App;
