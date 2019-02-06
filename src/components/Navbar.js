import React from "react"
import AppBar from "@material-ui/core/AppBar"
import ToolBar from "@material-ui/core/Toolbar"
// import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

// import "./Navbar.css"
class Navbar extends React.Component {

    constructor() {
        super()
        this.state = {
            myclass : {
                color:"red"
            }
    
        }
    }

    componentWillUnmount() {
        console.log(" navbar ter unmount ")
    }


    render() {
        const { app } = this.props
        return (
            
            <AppBar position="static" title="Qtemu" color="primary" IconButton="Home">
               <ToolBar>
                   <Grid container alignItems="center" justify="space-between">
                        <Grid item>
                            <Link to="/">
                                <Typography variant="h5" color="inherit"> { app.pageTitle } </Typography>
                            </Link>
                            
                        </Grid>
                        <Grid item>
                            <Link to="/create">
                                <Button color="inherit"> Create Meetup </Button>
                            </Link>
                            <Link to="/explore">
                                <Button color="inherit"> Explore </Button>
                            </Link>
                            
                            <Button color="inherit"> Login </Button>
                        </Grid>
                   </Grid>
               </ToolBar>
            </AppBar>
        )
    }

}

const mapStateToProps = (state) => {
    //console.log(" dari navbar",state)
    return {
        app: state.app
    }
}

export default connect(mapStateToProps)(Navbar)