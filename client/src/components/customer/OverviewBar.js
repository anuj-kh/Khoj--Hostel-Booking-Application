import React from 'react'
import OverviewBarTile from "./OverviewBarTile";
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
    const localStoragee = JSON.parse(localStorage.getItem('profile')).result;
    return (
        <div className={classes.root}>  
            <OverviewBarTile title='Credit' value={`${localStoragee.credit}`} />
            <OverviewBarTile title='Current Hostel' value={`${localStoragee.currentHostel}`} /> 
            <OverviewBarTile title='Days Left' value={`${localStoragee.daysLeft}`} />
        </div>  
    )
}
export default OverviewBar
