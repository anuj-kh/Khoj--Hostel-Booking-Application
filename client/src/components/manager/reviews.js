import React, { useState, useEffect } from 'react'
import Navbar from '../customer/navbar'
import { makeStyles, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import ReviewCard from '../customer/reviewCard'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        '& > *': {
            margin: theme.spacing(5),
            width: theme.spacing(100),
            height: theme.spacing(25),
        },
    },
    cent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addrev: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    errorDiv: {
        display: 'flex',
        justifyContent: 'center',
        margin: theme.spacing(1),
        fontWeight: 'bold'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
}))

let cl='red';

const Reviews = () => {
    const classes = useStyles()
    const localStoragee = JSON.parse(localStorage.getItem('profile')).result;
    const hostel=(localStoragee.currentHostel)?localStoragee.currentHostel.hostel:"0";


    var i = 0

    return (
        <>
            <Navbar />
            <br />
            <br />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                }}>
                <div>
                    <h1 className={classes.cent}>Your Reviews</h1>
                    <br />
                    <br />

                    {hostel.reviews!=null && hostel.reviews.map((rev) => (
                        <div className={classes.temp} key={i++}>
                            <ReviewCard
                                title={rev.student}
                                value={rev.comment}
                                date={rev.date.toString().substring(0,10)}
                                width='400px'
                                height='100px'
                            />
                        </div>
                    ))}
                </div>
                <div>
                    <h1 className={classes.cent}>Your Complaints</h1>
                    <br />
                    <br />

                    {hostel.complaints!=null && hostel.complaints.map((rev) => (
                        <div className={classes.temp} key={i++}>
                            <ReviewCard
                                title={rev.student}
                                value={rev.comment}
                                date={rev.date.toString().substring(0,10)}
                                width='400px'
                                height='100px'
                            />
                        </div>
                    ))}
                </div>
            </div>
            <br />
        </>
    )
}
export default Reviews
