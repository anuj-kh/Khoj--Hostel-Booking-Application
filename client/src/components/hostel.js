import React, { useState, useEffect } from 'react'
import Navbar from './navbar'
import { makeStyles, Grid, Paper } from '@material-ui/core' 
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import NewBookingCard from './newBookingCard';

const Hostel = (props) => {
    // const classes = useStyles();
    const [hostel, setHostel] = useState([])

    useEffect(() => {
        const fetchHostel = async () => {
            const res = await axios.get(
                `/hostel/hostel/${props.id}`,
            )

            setHostel(res.data)
        }

        fetchHostel()
    })

    return (
        <>
        <Navbar />
        <br />
        <br />
        <h1 className={classes.cent}>hostel {hostel.name}</h1>
        <br />
            
        <div className={classes.root}>
        
        
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
export default Hostel
