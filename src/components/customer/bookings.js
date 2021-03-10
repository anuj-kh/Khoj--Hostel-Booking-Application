import React, { Component } from 'react'
import Navbar from './navbar'
import { makeStyles } from '@material-ui/core'
import BookingTable from './bookingTable'

const useStyles = makeStyles({
    cent: {
        display: 'flex', 
        justifyContent:'center',
        alignItems:'center'
    }
});

const Bookings = () => {
    const classes = useStyles();
    return (
        <div>
            <Navbar />
            <h1 className={classes.cent} >Your Bookings</h1>
            <br /><br />
            <h2 className={classes.cent} >Ongoing Bookings</h2>
            <br />
            <BookingTable 
            nameA='Hostel 2' catA='Hostel' bookA='22nd Dec 2020' startA='1st Jan 2021' endA='31st July 2021' priceA='Rs. 20000'
            nameB='Food service 2' catB='Food service' bookB='22nd Dec 2020' startB='1st Jan 2021' endB='31st March 2021' priceB='Rs. 10000'
            />
            <br />
            <h2 className={classes.cent} >Future Bookings</h2>
            <br />
            <BookingTable 
            nameA='Hostel 3' catA='Hostel' bookA='9th March 2020' startA='1st August 2021' endA='30st Nov 2021' priceA='Rs. 30000'
            nameB='Food service 3' catB='Food service' bookB='10th March 2020' startB='1st April 2021' endB='31st July 2021' priceB='Rs. 12000'
            />
            <br />
            <h2 className={classes.cent} >Past Bookings</h2>
            <br />
            <BookingTable 
            nameA='Hostel 1' catA='Hostel' bookA='22nd Nov 2020' startA='1st Dec 2020' endA='31st Dec 2020' priceA='Rs. 25000'
            nameB='Food service 1' catB='Food service' bookB='22nd Nov 2020' startB='1st Dec 2020' endB='31st Dec 2020' priceB='Rs. 13000'
            />
            <br />
        </div>
    )
}
export default Bookings