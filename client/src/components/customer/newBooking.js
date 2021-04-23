import React, { useState } from 'react'
import Navbar from './navbar'
import { makeStyles, Grid, Paper } from '@material-ui/core'
import DatePicker from "react-datepicker";  
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import NewBookingCard from './newBookingCard';

const useStyles = makeStyles((theme) => ({
    root: {
    // display: 'flex',
    alignItems:'center',
    justifyContent: 'space-between',
      "& > *": {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(10),
        marginRight: theme.spacing(10),
      }
    },
    cent: {
        display: 'flex', 
        justifyContent:'center',
        alignItems:'center'
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'right',
    },
    paper2: {
        marginTop: theme.spacing(1),
        textAlign: 'center',
        borderRadius: 25,
    }
}));

const NewBooking = () => {
    const classes = useStyles();
    // const [hostels, setHostels] = useState([])
    const hostels=[
        {
            name: "Hostel 1",
            source: "/hostel1.jpg",
            address1: "Plot no. 1",
            address2: "Gyan Khand 2",
            address3: "Indirapuram",
            address4: "Delhi"
        },
        {
            name: "Hostel 2",
            source: "/hostel2.jpg",
            address1: "Plot no. 2",
            address2: "Gyan Khand 3",
            address3: "Indirapuram",
            address4: "Delhi"
        },
        {
            name: "Hostel 3",
            source: "/hostel3.jpg",
            address1: "Plot no. 3",
            address2: "Gyan Khand 4",
            address3: "Indirapuram",
            address4: "Delhi"
        }
    ];
    const [startDate, setStartDate] = useState();
    return (
        <>
        <Navbar />
        <br />
        <br />
        <h1 className={classes.cent}>Search for hostels</h1>
        <br />
            
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                <div className={classes.paper}><h4>Start date:</h4></div>
                </Grid>
                <Grid item xs={6}>
                <DatePicker className={classes.paper2} selected={startDate} onChange={date => setStartDate(date)} minDate={new Date()} />
                </Grid>
            </Grid>
        
        </div>


        { startDate &&
            hostels.map((rev) => (
                <div className={classes.root}>
                    <NewBookingCard
                        name={rev.name}
                        source={rev.source}
                        address1={rev.address1}
                        address2={rev.address2}
                        address3={rev.address3}
                        address4={rev.address4}
                    />
                </div>
            ))
        }
        <br/>
        </>
    )
}
export default NewBooking
