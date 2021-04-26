import React, {useState, useEffect} from 'react'
import Navbar from './navbar'
import { makeStyles } from '@material-ui/core'
import BookingTable from './bookingTable'
import axios from 'axios'

const useStyles = makeStyles({
    cent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

const Bookings = () => {
    const classes = useStyles();
    const localStoragee = JSON.parse(localStorage.getItem('profile')).result

    const currentBook=localStoragee.currentHostel;
    const futureBook=localStoragee.futureHostels;
    const prevBook=localStoragee.oldHostels;

    return (
        <div>
            <Navbar />
            <br />
            <br />
            <h1 className={classes.cent}>Your Bookings</h1>
            <br />
            <br />
            <h2 className={classes.cent}>Ongoing Bookings</h2>
            <br />

            {
            currentBook!=null && 
            <BookingTable hos={currentBook} key={'0'}/>
            }
            {
            currentBook==null && 
            <h4 className={classes.cent}>No bookings of this type!!</h4>
            }
            
            <br />
            <h2 className={classes.cent}>Future Bookings</h2>
            <br />
            
            {
            futureBook!=null && 
            <BookingTable hos={futureBook} key={'1'} />
            }
            {
            futureBook==null && 
            <h4 className={classes.cent}>No bookings of this type!!</h4>
            }

            <br />
            <h2 className={classes.cent}>Past Bookings</h2>
            <br />
            
            {
            prevBook!=null && 
            <BookingTable hos={prevBook} key={'2'}/>
            }
            {
            prevBook==null && 
            <h4 className={classes.cent}>No bookings of this type!!</h4>
            }

            <br />
        </div>
    )
}
export default Bookings
