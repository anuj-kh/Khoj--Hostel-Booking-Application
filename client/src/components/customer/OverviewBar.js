import React, {useState, useEffect} from 'react'
import OverviewBarTile from "./OverviewBarTile";
import { makeStyles } from '@material-ui/core'
import axios from 'axios'

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
    const [currentBook,setCurrentBook]=useState();
    const localStoragee = JSON.parse(localStorage.getItem('profile')).result;
    useEffect(() => {
        const fetchBookings = async () => {
            const res = await axios.get(`/dashboard/account/${localStoragee._id}`)

            setCurrentBook(res.data.currentHostel); 
        }

        fetchBookings()
    })
    

    return (
        <div className={classes.root}>  
            <OverviewBarTile title='Credit' value={`${localStoragee.credit}`} />
            <OverviewBarTile title='Current Hostel' value={
              currentBook!=null &&
              currentBook.map((row) => {
                  return row.hostel.name;
              })
            } /> 
            <OverviewBarTile title='Days Left' value={`30`} />
        </div>  
    )
}
export default OverviewBar
