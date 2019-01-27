import React from "react"
import CardMui from "@material-ui/core/Card"
import CardActions from '@material-ui/core/CardActions';
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import "./Card.css"

const Card = (props) => {
    return (
        /* <div style={ props.style } className="card">
            <div className="card-title">
                <h3> { props.title } </h3>
            </div>
            <div className="card-body">
                { props.children }
            </div>
            
        </div>*/
        <CardMui style={ props.style }>
            <CardHeader title={ props.title }></CardHeader>
            <CardContent>
                <Typography variant="subtitle1">
                    { props.children }
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" color="secondary" onClick={() => { document.location.href = props.href }} > View </Button>
            </CardActions>
        </CardMui>
    )
}


export default Card