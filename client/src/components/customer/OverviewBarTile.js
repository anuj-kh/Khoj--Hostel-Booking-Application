import React from 'react'
import { makeStyles, Paper, Grid } from '@material-ui/core'

const useStyles = makeStyles({
    customBorderRadius: {
        borderRadius: 25,
        //   flexGrow: 1
    },
})

const OverviewBarTile = (props) => {
    const classes=useStyles();
        return (
            <Paper className={classes.customBorderRadius} elevation={15}>
                <Grid align="center">
                    <br />
                    <h3 style={{ fontSize: '30px' }}>{props.title}</h3>
                    <p style={{ marginTop: '10px', fontSize: '20px' }}>
                    { (props.value)=="undefined" ? "Not registered" : props.value }
                    </p>
                </Grid>
            </Paper>
        )
}
export default OverviewBarTile
