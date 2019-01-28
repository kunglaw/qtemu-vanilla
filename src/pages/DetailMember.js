import React, { Component } from 'react';
import Text from "../components/Text"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardHeader from "@material-ui/core/CardHeader"
import Axios from 'axios';


class DetailMember extends Component {

    constructor() {
        super()
        this.state = {
            member:{}
        }
    }

    componentDidMount() {

        console.log(this.props)
        console.log(" dafukk ", `${this.props.match.params.memberId}`)

        Axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.memberId}`)
        .then(res => {

            console.log( " res ====> ",res.data )

            this.setState({
                member: res.data
            })
        })
    }

    render() {
        const member = this.state.member
        return (
            <React.Fragment>
                <Card style={{ margin:"10px auto", width:"90%"}}>
                    <CardHeader title={ member.name }></CardHeader>
                    <CardContent>
                        
                        <Text> Email : { member.email }</Text>
                        <Text> Username : { member.username } </Text>
                    </CardContent>
                </Card>
            </React.Fragment>
        );
    }
}

export default DetailMember;