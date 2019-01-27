import React from "react"
import AppBar from "@material-ui/core/AppBar"
import ToolBar from "@material-ui/core/Toolbar"
// import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"

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

    render() {
       
        return (
            
            <AppBar position="static" title="Qtemu" color="primary" IconButton="Home">
               <ToolBar>
                   <Grid container alignItems="center" justify="space-between">
                        <Grid item>
                            <Typography variant="h5" color="inherit"> Qtemu </Typography>
                        </Grid>
                        <Grid item>
                            <Button color="inherit"> Create Meetup </Button>
                            <Button color="inherit"> Explore </Button>
                            <Button color="inherit"> Login </Button>
                        </Grid>
                   </Grid>
               </ToolBar>
            </AppBar>
        )
    }

}

export default Navbar