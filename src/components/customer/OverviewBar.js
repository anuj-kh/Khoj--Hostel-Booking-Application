import React from 'react'
import OverviewBarTile from "./OverviewBarTile";
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
    display: 'flex',
    justifyContent: 'space-between',
      "& > *": {
        margin: theme.spacing(5),
        width: theme.spacing(32),
        height: theme.spacing(16)
      }
    }
}));
  
const OverviewBar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>  
            <OverviewBarTile title='Credit' value='600'/>
            <OverviewBarTile title='Days Left' value='16'/>
            <OverviewBarTile title='Current Hostel' value="Sharma's"/>
            <OverviewBarTile title='Tiffin Service' value="Singh's"/>
        </div>  
    )
}
export default OverviewBar
