import React, { useState } from 'react'
import Navbar from './navbar'
import { makeStyles } from '@material-ui/core'
import DatePicker from "react-datepicker";
import { Grid } from '@material-ui/core'
import "react-datepicker/dist/react-datepicker.css";
// import hostel1 from 'hostel1.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
    display: 'flex',
    justifyContent: 'space-between',
      "& > *": {
        marginTop: theme.spacing(10),
        marginLeft: theme.spacing(10),
        marginRight: theme.spacing(10),
      }
    },
    root2: {
        display: 'flex',
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
    }
}));

const NewBooking = () => {
    const classes = useStyles();
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
        <Navbar />
        <h1 className={classes.cent} >Search for hostels</h1>
        <div className={classes.root}>
            <h4>Start date:</h4>
            {/* <DatePicker selected={startDate} onChange={date => setStartDate(date)} minDate={new Date()} /> */}
            {/* <DatePicker selected={startDate} onChange={date => setStartDate(date)} minDate={new Date()} /> */}
        </div>
        <div className={classes.root2}>
            <DatePicker selected={startDate} onChange={date => setStartDate(date)} minDate={new Date()} />
            {/* <DatePicker selected={startDate} onChange={date => setStartDate(date)} minDate={new Date()} /> */}
            {/* <DatePicker selected={startDate} onChange={date => setStartDate(date)} minDate={new Date()} /> */}
        </div>

        {/* <Grid container spacing={2}> */}
        <div className={classes.root2}>
            <img src="/hostel1.jpg" alt="hostel1" width="200" height="200" />
            {/* <div>anuj</div> */}
            </div>
            {/* <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half /> */}
        {/* </Grid> */}
        </>
    )
}
export default NewBooking
