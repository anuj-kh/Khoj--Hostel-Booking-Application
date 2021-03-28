import React, { Component } from 'react'
import { makeStyles, Paper, Box, Grid } from '@material-ui/core'

const useStyles = makeStyles({
    customBorderRadius: {
      borderRadius: 25,
      display: 'flex', 
      justifyContent:'center',
      alignItems:'center'
    }
});

const ReviewCard = (props) => {
    const classes=useStyles();
        return (
            <Paper className={classes.customBorderRadius} elevation={15}>
                <Grid align="center" justify="center" direction="column" width='50%' >
                    <h2>{props.title}</h2>
                    <p>{props.value}</p>
                    <h3>- {props.date}</h3>
                </Grid>
            </Paper>
        )
}
export default ReviewCard
