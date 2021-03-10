import React, { Component } from 'react'
import Navbar from './navbar'
import OverviewBar from './OverviewBar'
import { makeStyles } from '@material-ui/core'
import OverviewMain from "./OverviewMain";
const useStyles = makeStyles({
    cent: {
        display: 'flex', 
        justifyContent:'center',
        alignItems:'center'
    }
});

const Main = () => {
    const classes = useStyles();
    return (
        <div>
            <Navbar />
            <h1 className={classes.cent} >Welcome to KHOJ</h1>
            <OverviewBar />
            <OverviewMain />
        </div>
    )
}
export default Main