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
            <br/>
            <br/>
            <br/>
            <br/>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                }}>
                <div>
                    <h3 className={classes.cent}>Students registered:</h3>

                </div>
                <div>
                    <h3 className={classes.cent}>Students subscription started:</h3>
                </div>
            </div>

            <div className={classes.cent} >
                <img className={classes.paper} src={"/chart.png"} alt={"/chart.png"} width="700" height="400" />
                <img className={classes.paper} src={"/chart2.png"} alt={"/chart2.png"} width="700" height="400" />
            </div>

                <br/>
                <br/>
                <br/>
                <br/>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                }}>
                <div>
                    <h3 className={classes.cent}>Students subscription ended:</h3>

                </div>
                <div>
                    <h3 className={classes.cent}>Reviews received:</h3>
                </div>
            </div>
            

            <div className={classes.cent} >
            <img className={classes.paper} src={"/chart3.png"} alt={"/chart3.png"} width="700" height="400" />
            
            <img className={classes.paper} src={"/chart4.png"} alt={"/chart4.png"} width="700" height="400" />
            </div>
            
            <br/>
                <br/>
                <br/>
                <br/>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                }}>
                <div>
                    <h3 className={classes.cent}>Complaints received:</h3>

                </div>

            </div>
            

            <div className={classes.cent} >
            <img className={classes.paper} src={"/chart5.png"} alt={"/chart5.png"} width="700" height="400" />
            </div>
        </div>
    )
}
export default Main
