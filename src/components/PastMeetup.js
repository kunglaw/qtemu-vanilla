import React from "react"
import Button from "./Button"
import Card from "./Card"

import "./PastMeetup.css"

class PastMeetup extends React.Component{

    render() {

        const { pastMeetup } = this.props
        
        const pastMeetupCards = pastMeetup.map(( content ) => {
            return(
                <Card style={{ width:"25%", marginRight:"50px" }} title={ content.title }>
                    <p> { content.description } </p>  
                    <Button className="btn btn-lg btn-success" href={ content.redirect }> View </Button>
                </Card>
            )
        })

        return (
            <section id="past-meetup">
                <div className="container">
                    <h1>Past Meetup</h1>
                    
                    { pastMeetupCards }
                   
                    <div className="clearfix"></div>
                </div>
            </section>
        )
    }
}

export default PastMeetup