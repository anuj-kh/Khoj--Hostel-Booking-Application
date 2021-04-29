import React from 'react'
import { makeStyles, Grid, Paper } from '@material-ui/core'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1),
        textAlign: 'right',
    },
    paper3: {
        padding: theme.spacing(1),
        textAlign: 'left'
    },
    temp: {
        textDecoration: 'none',
        justifyContent:'center',
        alignItems:'center'
    },
    customBorderRadius: {
        marginLeft: theme.spacing(40),
        borderRadius: 12,
        display: 'flex', 
        justifyContent:'center',
        alignItems:'center',
        width: theme.spacing(100),
        height: theme.spacing(28),
    }
}));

const NewBookingCard = (props) => {
    const classes = useStyles();
    return (
        <>
        <Link to={`/dashboard/hostel/${props.id}`}  >
            <Paper className={classes.customBorderRadius} elevation={10}>
                    <Grid item xs={6}>
                    <img className={classes.paper} src={`/uploads/${props.source}`} alt={props.name} width="200" height="200" />
                    </Grid>
                    <Grid item xs={6}>
                        <div className={classes.paper3}>
                            <h2 className={classes.temp}>{props.name}</h2>
                            <div className={classes.temp}>{props.address}</div>
                            <div className={classes.temp}>Owner: {props.owner}</div>
                            {/* <div className={classes.temp}>{props.address2}</div>
                            <div className={classes.temp}>{props.address3}</div>
                            <div className={classes.temp}>{props.address4}</div> */}
                        </div>
                    </Grid>
            </Paper>
        </Link>
        </>
    )
}
export default NewBookingCard
