import React, { Component } from 'react'
import Navbar from './navbar'
import AccountTable from './accountTable.js'
import { makeStyles, Button } from '@material-ui/core'

const useStyles = makeStyles({
    cent: {
        display: 'flex', 
        justifyContent:'center',
        alignItems:'center',
    },
    cent2: {
        margin: '2rem'
    }
});
const MyAccount = () => {
    const classes = useStyles();
    return (
        <div>
            <Navbar />
            <h1 className={classes.cent} >Your Account</h1>
            <br /><br />
            <AccountTable />
            <div className={classes.cent}>
                <Button variant="contained" className={classes.cent2} >Pay your charges</Button>
                <Button variant="contained" className={classes.cent2} >New Booking</Button>
            </div>
        </div>
    )
}
export default MyAccount