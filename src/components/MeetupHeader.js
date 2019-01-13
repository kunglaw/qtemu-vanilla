import React from "react"
import "./MeetupHeader.css"

import Button from "./Button"

class MeetupHeader extends React.Component {
    constructor () {
        super()
        this.state = {
            name:'test'
        }
    }

    render() {
        return (
            <section id="meetup-header" >
                <div className="container">
                    <div className="profile-pic">
                        <img src="/assets/img/gintoki.png"></img>
                    </div>
                    <div className="detail">
                        <h2> Hacktiv8 Meetup </h2>
                        <div className="clearfix"></div>

                        <table cellPadding="5">
                            <tr>
                                <td > Location </td>
                                <td> Jakarta, Indonesia </td>
                            </tr>
                            <tr>
                                <td > Members </td>
                                <td> 2000 </td>
                            </tr>
                            <tr>
                                <td > Organizers </td>
                                <td> Aries Dimas Yudhistira </td>
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