import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import Input from "../components/Input";
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { CardHeader, Button, Typography } from '@material-ui/core';

class CreateMeetup extends Component {

    constructor() {
        this.state = { 
            title:"",
            location:"",
            organizer:"",
            description:""
        }
    }

    render() {
        return (
            <div>
                <Navbar></Navbar>
                    <form action="#" method="post"  >
                        <Card style={{ width:"90%", margin:"20px auto" }}>
                            <CardHeader title="Create Meetup"></CardHeader>
                            <CardContent>
                                <Input type="text" label="Title" variant="outlined" style={{ width:"60%", margin:"10px 0"}}></Input>
                                <Input type="text" label="Location" variant="outlined" style={{ width:"60%", margin:"10px 0"}}></Input>
                                <Input type="text" label="Organizer" variant="outlined" style={{ width:"60%", margin:"10px 0"}}></Input>
                                <Input multiline rows="4" label="Description" variant="outlined" style={{ width:"60%", margin:"10px 0"}}></Input>
                                <br></br>
                                <Button type="button" variant="contained" color="primary">
                                    <Typography>Create</Typography>
                                </Button>
                            </CardContent>
                        </Card>
                    </form>
                <Footer></Footer>
            </div>
        );
    }
}

export default CreateMeetup;