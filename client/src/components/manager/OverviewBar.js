import React, {useState, useEffect} from 'react'
import OverviewBarTile from "../customer/OverviewBarTile";
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
    const curHostel=(localStoragee.currentHostel)?localStoragee.currentHostel.hostel.name:"Not registered";
    const curStudents=(localStoragee.currentHostel) ?
                        (localStoragee.currentHostel.hostel.currentStudents) ?
                         localStoragee.currentHostel.hostel.currentStudents.length 
                         : 0 :0;
    let dues=0;
    if(curStudents!=0)
    {
        localStoragee.currentHostel.hostel.currentStudents.map((i)=>{
            dues+=i.dues;
        });
    }

    return (
        <div className={classes.root}>  
            <OverviewBarTile title='Your Hostel' value={curHostel} /> 
            <OverviewBarTile title='Current students' value={curStudents} />
            <OverviewBarTile title='Current dues' value={dues} />
        </div>  
    )
}
export default OverviewBar
