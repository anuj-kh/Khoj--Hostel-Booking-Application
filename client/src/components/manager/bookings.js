import React, {useState, useEffect} from 'react'
import Navbar from '../customer/navbar'
import { makeStyles } from '@material-ui/core'
import BookingTable from './bookingTable'

const useStyles = makeStyles({
    cent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

const Bookings = () => {
    const classes = useStyles();
    const localStoragee = JSON.parse(localStorage.getItem('profile')).result;
    const hostel=(localStoragee.currentHostel)?localStoragee.currentHostel.hostel:"0";
    console.log(hostel)
    const currentBook=(hostel!="0")?hostel.currentStudents:null;
    const futureBook=(hostel!="0")?hostel.futureStudents:null;
    const prevBook=(hostel!="0")?hostel.oldStudents:null;

    return (
        <div>
            <Navbar />
            <br />
            <br />
            <h1 className={classes.cent}>Your Hostel Bookings</h1>
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
