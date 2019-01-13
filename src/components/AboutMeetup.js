import React from "react"
import "./AboutMeetup.css"

class AboutMeetup extends React.Component {
    render() {
        return (
            <section id="about-meetup"> 
                <div className="container">
                    <h1>About Meetup</h1>

                    <p>
                        HACKTIV8 adalah pionir program pelatihan (coding bootcamp) 
                        intensif selama 12 minggu di Jakarta yang mengubah pemula 
                        menjadi seorang Full-Stack Developer andal.
                    </p>
                    <p>For more information, contact:</p>

                    <div>(+62) 819 0887 8010</div>
                    <a href="#">admissions@hacktiv8.com</a>
                </div>
                
            </section>
        )
    }
}

export default AboutMeetup