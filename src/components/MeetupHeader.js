import React from "react"
import "./MeetupHeader.css"

import Button from "./Button"

import { connect } from "react-redux"
import { changePageTitle, changeFooter } from "../common/actions/app"

class MeetupHeader extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            meetupHeader:props.meetupHeader    
        }
    }

    render() {
        const { meetupHeader } = this.state
        const { changePageTitle, changeFooter } = this.props
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
                            <tbody>
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
                            </tbody>
                        </table>

                        <Button color="primary" variant="contained" > Join Us </Button>
                        <Button color="success" variant="contained" onClick={ () => changePageTitle(" Yudhistira Asik ") } > Change Title </Button>
                        <Button color="danger" variant="contained" onClick={ changeFooter } > Change Footer </Button>
                    </div>
                    <div className="clearfix"></div>
                </div>
                
            </section>
        )
    }
}

const mapDispatchToProps = {
    changePageTitle,
    changeFooter
}

export default connect(null,mapDispatchToProps)(MeetupHeader)