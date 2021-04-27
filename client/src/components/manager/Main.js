import React, {useEffect, useState} from 'react'
import Navbar from '../customer/navbar'
import OverviewBar from './OverviewBar'
import { makeStyles } from '@material-ui/core'
import axios from 'axios'

const useStyles = makeStyles({
    cent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

const Main = () => {
    const classes = useStyles()
    const localStoragee = JSON.parse(localStorage.getItem('profile')).result;
    const [dummy,setDummy]=useState(0)

    useEffect(() => {
        const fun= async () => {
            try {
                const response = await axios.get(`/dashboard/${localStoragee._id}`)
                const data=response.data;
                if (Object.keys(data).length == 1) 
                    throw data.message;
                localStorage.setItem('profile', JSON.stringify({ ...data }));
                setDummy((dummy==0)?1:0)
            } catch (e) {
                console.log(` Axios request failed: ${e}`)
            }
        };
        fun();
    });

    return (
        <div>
            <Navbar />
            <br />
            <br />
            <h1 className={classes.cent}>Welcome to KHOJ</h1>
            <br />
            <OverviewBar />
            <br />
        </div>
    )
}
export default Main
