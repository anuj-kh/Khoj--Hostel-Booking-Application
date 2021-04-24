import React, { useState, useEffect } from 'react'
import Navbar from './customer/navbar'
import { makeStyles, Grid, Button } from '@material-ui/core' 
import "react-datepicker/dist/react-datepicker.css";
import { Link, useParams } from 'react-router-dom';
// import NewBookingCard from './newBookingCard';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    cent: {
        display: 'flex', 
        justifyContent:'center',
        alignItems:'center'
    },
    paper: {
        marginLeft: theme.spacing(15),
        marginTop: theme.spacing(5),
        padding: theme.spacing(1),
        textAlign: 'right',
    },
    paper2: {
        marginTop: theme.spacing(6),
        textAlign: 'left',
        // borderRadius: 25,
    },
    cent2: {
        margin: '2rem',
    }
}));

const Hostel = (props) => {
    const { id } = useParams()
    const classes = useStyles();
    const [hostel, setHostel] = useState([])

    useEffect(() => {
        const fetchHostel = async () => {
            const res = await axios.get(
                `/hostel/hostel/${id}`,
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
        <h1 className={classes.cent}>{hostel.name}</h1>
        <br />
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                <img className={classes.paper} src={hostel.source} alt={hostel.name} width="200" height="200" />
                </Grid>
                <Grid item xs={6} className={classes.paper2}>
                    <h4>Location:</h4>
                    <p>{hostel.address}</p>
                    <br/>
                    <h4>Owner:</h4>
                    <p>{hostel.owner}</p>
                    <br/>
                    <h4>Reviews:</h4>
                    {/* <p>{hostel.address}</p> */}
                    <div className={classes.cent}>
                        <Button variant='contained' className={classes.cent2}>
                            Book this hostel
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </div>
        </>
    )
}
export default Hostel
