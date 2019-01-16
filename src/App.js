import React, { Component } from 'react';

import './App.css';

import Navbar from "./components/Navbar"
import MeetupHeader from "./components/MeetupHeader"
import NextMeetup from "./components/NextMeetup"
import AboutMeetup from './components/AboutMeetup';
import Member from "./components/Member"
import PastMeetup from "./components/PastMeetup"
import Footer from "./components/Footer"

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      meetupHeader : {
        location:"Jakarta, Indonesia",
        members:2000,
        organizers:"Aries Dimas Yudhistira",
        img:"./assets/img/gintoki.png"
      } , 
      members:[
        {
          title:"Organizer",
          name:"Aries Dimas Yudhistira",
          avatar:""
        },{
          title:"Asistant",
          name:"Wika Silo",
          avatar:""
        }
      ],
      pastMeetup:[
        {
          title:"JakartaJS on Sailor Job Problem",
          description:"JakartaJS Meet Informasea.com on how sailor get the job done ",
          redirect:""
        },
        {
          title:"JakartaJS on Web Developer facing Deadline Driven Development",
          description:"JakartaJS Meet Informasea.com on how sailor get the job done ",
          redirect:""
        },
        {
          title:"JakartaJS on Sailor Job Problem",
          description:"JakartaJS Meet Informasea.com on how sailor get the job done ",
          redirect:""
        },
      ]

    }
  }

  render() {

    const { meetupHeader,members,pastMeetup } = this.state

    return (
      <div className="App">
        <Navbar></Navbar>
        <MeetupHeader meetupHeader={ meetupHeader }></MeetupHeader>
        <NextMeetup></NextMeetup>
        <AboutMeetup></AboutMeetup>
        <Member members={ members }></Member>
        <PastMeetup pastMeetup={ pastMeetup }></PastMeetup>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
