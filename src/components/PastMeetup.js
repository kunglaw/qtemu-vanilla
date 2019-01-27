import React from "react"
import Button from "./Button"
import Card from "./Card"
import Grid from "@material-ui/core/Grid"

import "./PastMeetup.css"

class PastMeetup extends React.Component{

    render() {

        const { pastMeetup } = this.props
        
        const pastMeetupCards = pastMeetup.map(( content ) => {
            return(
                <Grid item sm={4}>
                    <Card href={ content.redirect } key={ content.title } style={{  }} title={ content.title }>
                        <p> { content.description } </p>  
                    
                    </Card>
                </Grid>
                
            )
        })

        return (
            <section id="past-meetup">
                <div className="container">
                    <h1>Past Meetup</h1>
                    
                    <Grid container spacing={8} direction="row">
                        { pastMeetupCards }
                    </Grid>
                    
                   
                    <div className="clearfix"></div>
                </div>
            </section>
        )
    }
}

export default PastMeetup