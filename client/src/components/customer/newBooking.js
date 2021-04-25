import React, { useState, useEffect } from 'react'
import Navbar from './navbar'
import { makeStyles, Grid } from '@material-ui/core'
import DatePicker from "react-datepicker";  
import "react-datepicker/dist/react-datepicker.css";
import NewBookingCard from './newBookingCard';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
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
    const [hostels, setHostels] = useState([])

    useEffect(() => {
        const fetchHostel = async () => {
            const res = await axios.get(
                `/hostel/hostels`,
            )
            setHostels(res.data)
        }

        fetchHostel()
    })

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
                <div className={classes.root} key={rev._id}>
                    <NewBookingCard
                        name={rev.name}
                        source={rev.source}
                        address={rev.address}
                        owner={rev.owner}
                        id={rev._id}
                    />
                </div>
            ))
        }
        <br/>
        </>
    )
}
export default NewBooking
