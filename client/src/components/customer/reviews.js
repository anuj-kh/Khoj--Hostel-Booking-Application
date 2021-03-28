import React, { Component } from 'react'
import Navbar from './navbar'
import { makeStyles } from '@material-ui/core'
import ReviewCard from './reviewCard'

const useStyles = makeStyles((theme) => ({
    root: {
    display: 'flex',
    justifyContent: 'center',
      "& > *": {
        margin: theme.spacing(5),
        width: theme.spacing(100),
        height: theme.spacing(25)
      }
    },
    cent: {
        display: 'flex', 
        justifyContent:'center',
        alignItems:'center'
    }
}));

const Reviews = () => {
    const classes = useStyles();
    return (
        <div>
            <Navbar />
            <h1 className={classes.cent} >Your Reviews</h1>
            <br /><br />
            <div className={classes.root}>
                <ReviewCard
                title='Hostel 2' 
                value='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
                date='20th Jan 2021'
                />
            </div>
            <div className={classes.root}>
                <ReviewCard
                title='Hostel 3' 
                value='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
                date='15th Dec 2020'
                />
            </div>
            <div className={classes.root}>
                <ReviewCard
                title='Hostel 4' 
                value='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
                date='05th Nov 2020'
                />
            </div>
            <br />
        </div>
    )
}
export default Reviews