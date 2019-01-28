import React, { Component } from 'react';

import MeetupHeader from "./../components/MeetupHeader"
import NextMeetup from "./../components/NextMeetup"
import AboutMeetup from './../components/AboutMeetup';
import Member from "./../components/Member"
import PastMeetup from "./../components/PastMeetup"


import axios from "axios"

class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      errorMember:false,
      errorPastMeetup:false,
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
        // {
        //   title:"JakartaJS on Web Developer facing Deadline Driven Development",
        //   description:"JakartaJS talks about how we ",
        //   redirect:""
        // },
        // {
        //   title:"JakartaJS on Sailor Job Problem",
        //   description:"JakartaJS Meet Informasea.com on how sailor get the job done ",
        //   redirect:""
        // },
      ]

    }
  }

  componentWillMount() {
    console.log(" component will Mount ")
  }
 
  componentDidUpdate() {
    //console.log(" component did Update ")
    //alert(" ada data baru ")
  }

  componentDidMount() {
    console.log(" componentDidMount ")
    axios.get("https://jsonplaceholder.typicode.com/users")
         .then((res) => {

          console.log( " res ====> ",res.data )

          const members = res.data.map( item => {
            return {
              id: item.id,
              title: item.company.bs,
              name: item.name,
              avatar:""
            }
          })

           //console.log( data )
           this.setState({
              members 
           })
         })
         .catch(err => {
           console.log(err)
         })

    axios.get("https://swapi.co/api/films/")
         .then(res => {

          const event = res.data.results.map(item => {
            return {
              title:item.title,
              description:item.opening_crawl,
              redirect:""
            }
          })

          this.setState({
            pastMeetup : event 
          })


           //console.log(" event ====> ",res.data.results)
         })
         .catch(err => {
           console.log( err )
         })

  }

  componentWillReceiveProps() {
    console.log(" componentWillReceiveProps ")
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true // dia harus return true atau false 
  }

  render() {

    const { meetupHeader,members,pastMeetup } = this.state

    return (
      <React.Fragment>
       
        <MeetupHeader meetupHeader={ meetupHeader }></MeetupHeader>
        <NextMeetup></NextMeetup>
        <AboutMeetup></AboutMeetup>
        <Member members={ members }></Member>
        <PastMeetup pastMeetup={ pastMeetup }></PastMeetup>
       
      </React.Fragment>
    );
  }
}

export default Home;
