import React, { Component } from 'react'
import { makeStyles, Paper, Box, Grid } from '@material-ui/core'

const useStyles = makeStyles({
    customBorderRadius: {
      borderRadius: 25,
    //   flexGrow: 1
    }
});

const OverviewBarTile = (props) => {
    const classes=useStyles();
        return (
            <Paper className={classes.customBorderRadius} elevation={15}>
                <Grid align="center" justify="center" direction="column" >
                    <br />
                    <h2>{props.title}</h2>
                    <h3>{props.value}</h3>
                </Grid>
            </Paper>
        )
}
export default OverviewBarTile
