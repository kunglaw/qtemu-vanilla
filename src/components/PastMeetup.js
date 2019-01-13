import React from "react"
import Button from "./Button"
import Card from "./Card"

import "./PastMeetup.css"

class PastMeetup extends React.Component{

    constructor() {
        super()
    }

    render() {
        return (
            <section id="past-meetup">
                <div className="container">
                    <h1>Past Meetup</h1>
                    <Card style={{ width:"25%", marginRight:"70px" }} title="JakartaJS on Sailor Job Problem">
                        <p> JakartaJS Meet Informasea.com on how sailor get the job done </p>  
                        <Button className="btn btn-lg btn-success"> View </Button>
                    </Card>
                    <Card style={{ width:"25%", marginRight:"70px" }} title="JakartaJS on Sailor Job Problem">
                        <p> JakartaJS Meet Informasea.com on how sailor get the job done </p>  
                        <Button className="btn btn-lg btn-success"> View </Button>
                    </Card>
                    <Card style={{ width:"25%" }} title="JakartaJS on Sailor Job Problem">
                        <p> JakartaJS Meet Informasea.com on how sailor get the job done </p>  
                        <Button className="btn btn-lg btn-success"> View </Button>
                    </Card>
                    <div className="clearfix"></div>
                </div>
            </section>
        )
    }
}

export default PastMeetup