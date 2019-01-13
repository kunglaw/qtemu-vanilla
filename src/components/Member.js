import React from "react"
import "./Member.css"

class Member extends React.Component {
    render() {
        return (
            <section id="member">
                <div className="container">
                    <h1> Members </h1>
                    <div className="content">
                        <img className="member-img" src=""></img>
                        <div className="description">
                            <h3>Organizer</h3>
                            <p>Aries Dimas Yudhistira</p>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Member