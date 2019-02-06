import React from "react"
import { Link } from "react-router-dom"
import Text from "./Text"
import "./Member.css"

class Member extends React.Component {

    render() {

        const members  = this.props.members

        const memberContents = members.map((content) => {
            return (
                <div key={ content.id } className="content">
                    <img className="member-img" src="{}" alt="avatar"></img>
                    <div className="description">
                        <h3>{ content.title }</h3>
                        <Link to={`/member/${content.id}`}><Text>{ content.name }</Text></Link>
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