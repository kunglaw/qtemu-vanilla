import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from "../components/Card"
import Grid from "@material-ui/core/Grid"
import Text from "../components/Text"

class Explore extends Component {
    render() {
        const style = {
            spacing:8
        }
        return (
            <div >
                <Navbar></Navbar>
                <section style={{width:"90%",margin:"10px auto"}}>

                    <Text variant="h4" style={{ margin:"20px 0"}}> Explore </Text>
                   
                    <Grid container spacing={ style.spacing }>
                        <Grid item md="4" >
                            <Card title="Hello World" href="#" >
                                <Text> Lorem Ipsum, Sit Dolor Amet </Text>
                            </Card>
                        </Grid>
                        <Grid item md="4" >
                            <Card title="Hello World" href="#" >
                                <Text> Lorem Ipsum, Sit Dolor Amet </Text>
                            </Card>
                        </Grid>
                        <Grid item md="4" >
                            <Card title="Hello World" href="#" >
                                <Text> Lorem Ipsum, Sit Dolor Amet </Text>
                            </Card>
                        </Grid>
                       
                    </Grid>
                    
                </section>
                <Footer></Footer>
            </div>
        );
    }
}

export default Explore;