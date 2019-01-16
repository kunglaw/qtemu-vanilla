import React from "react"
import "./Member.css"

class Member extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            members:props.members
        }
    }

    render() {

        const { members } = this.state

        const memberContents = members.map((content) => {
            return (
                <div className="content">
                    <img className="member-img" src="{}" alt="avatar"></img>
                    <div className="description">
                        <h3>{ content.title }</h3>
                        <p>{ content.name }</p>
                    </div>
                    <div className="clearfix"></div>
                </div>
            )
        })

        return (
            <section id="member">
                <div className="container">
                    <div>
                        <h1> Members </h1>
                        <a className="see-all" href="#">See All</a>
                        <div className="clearfix"></div>
                    </div>

                   { memberContents } 
                   
                </div>
            </section>
        )
    }
}

export default Member