import React from 'react'
import { makeStyles, Paper, Grid } from '@material-ui/core'

const useStyles = makeStyles({
    customBorderRadius: {
        borderRadius: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

const ReviewCard = (props) => {
    const classes = useStyles()
    return (
        <Paper
            className={classes.customBorderRadius}
            elevation={7}
            style={{
                margin: '20px',
                height: `${props.height}`,
                width: `${props.width}`,
                padding: '20px',
            }}>
            <Grid align='center' width='50%' style={{ margin: '0px' }}>
                <h2>{props.title}</h2>
                <br />
                <p>{props.value}</p>
                <br />
                <h5>- {props.date}</h5>
            </Grid>
        </Paper>
    )
}
export default ReviewCard
