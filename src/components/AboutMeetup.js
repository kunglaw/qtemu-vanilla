import React from "react"
import "./AboutMeetup.css"

import Text from "./Text"

class AboutMeetup extends React.Component {
    render() {
        return (
            <section id="about-meetup"> 
                <div className="container">
                    <h1>About Meetup</h1>
                    

                    <Text>
                        HACKTIV8 adalah pionir program pelatihan (coding bootcamp) 
                        intensif selama 12 minggu di Jakarta yang mengubah pemula 
                        menjadi seorang Full-Stack Developer andal.
                    </Text>
                    <Text>For more information, contact:</Text>

                    <Text>(+62) 819 0887 8010</Text>
                    <a href="#">admissions@hacktiv8.com</a>
                </div>
                
            </section>
        )
    }
}

export default AboutMeetup