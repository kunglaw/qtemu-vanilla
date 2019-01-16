import React from "react"
import "./MeetupHeader.css"

import Button from "./Button"

class MeetupHeader extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            meetupHeader:props.meetupHeader    
        }
    }

    render() {
        const { meetupHeader } = this.state
        return (
            <section id="meetup-header" >
                <div className="container">
                    <div className="profile-pic">
                        <img src={ meetupHeader.img } alt="Meetup Header"></img>
                    </div>
                    <div className="detail">
                        <h2> Hacktiv8 Meetup </h2>
                        <div className="clearfix"></div>

                        <table cellPadding="5">
                            <tr>
                                <td > Location </td>
                                <td>: { meetupHeader.location } </td>
                            </tr>
                            <tr>
                                <td > Members </td>
                                <td>: { meetupHeader.members } </td>
                            </tr>
                            <tr>
                                <td > Organizers </td>
                                <td>: { meetupHeader.organizers } </td>
                            </tr>
                        </table>

                        <Button className="btn btn-primary btn-lg"> Join Us </Button>
                    </div>
                    <div className="clearfix"></div>
                </div>
                
            </section>
        )
    }
}

export default MeetupHeader