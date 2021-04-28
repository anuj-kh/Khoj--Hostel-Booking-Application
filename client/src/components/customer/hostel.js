import React, { useState, useEffect } from 'react'
import Navbar from './navbar'
import { makeStyles, Grid, Button } from '@material-ui/core' 

import { useParams } from 'react-router-dom';
import axios from 'axios'
import DatePicker from "react-datepicker";  
import "react-datepicker/dist/react-datepicker.css";
import ReviewCard from './reviewCard'

const useStyles = makeStyles((theme) => ({
    cent: {
        display: 'flex', 
        justifyContent:'center',
        alignItems:'center'
    },
    paper: {
        marginLeft: theme.spacing(15),
        marginTop: theme.spacing(5),
        padding: theme.spacing(1),
        textAlign: 'right',
    },
    paper2: {
        marginTop: theme.spacing(6),
        textAlign: 'left',
        // borderRadius: 25,
    },
    paper3: {
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(1),
        textAlign: 'center',
        borderRadius: 25,
    },
    paper4: {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(2),
        textAlign: 'center',
        borderRadius: 25,
    },
    cent2: {
        margin: '2rem',
    },
    errorDiv: {
        margin: theme.spacing(1),
        fontWeight: 'bold'
    },
    temp:{
        
    }
}));

let cl='red';
let i=0;
const Hostel = (props) => {
    const { id } = useParams()
    const classes = useStyles();
    const [hostel, setHostel] = useState([])
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const todayDate=new Date();
    const [error, setError] = useState("");
    const localStorageId = JSON.parse(localStorage.getItem('profile')).result._id;
    useEffect(() => {
        const fetchHostel = async () => {
            const res = await axios.get(
                `/hostel/hostel/${id}`,
            )

            setHostel(res.data)
        }

        fetchHostel()
    })

    const handleClick = (e) => {
        if(startDate==undefined && endDate==undefined)
        {
            cl='red';
            setError("Start and end dates are not given!!")
        }
        else if(startDate==undefined)
        {
            cl='red';
            setError("Start date is not given!!")
        }
        else if(endDate==undefined)
        {
            cl='red';
            setError("End date is not given!!")
        }
        else if (
            startDate!=undefined && 
            endDate!=undefined &&
            startDate.getDate()>=endDate.getDate() && 
            startDate.getMonth()>=endDate.getMonth() &&
            startDate.getFullYear()>=endDate.getFullYear()
        )
        {
            cl='red';
            setError("End date should be after the start date!!")
        }
        else
        {
            let flag=false;
            if( todayDate.getDate()==startDate.getDate() && todayDate.getMonth()==startDate.getMonth() && todayDate.getFullYear()==startDate.getFullYear() )
                flag=true;
            let days= ( endDate.getTime()-startDate.getTime() ) / (1000*3600*24) ;
            let dues= (days/30)*hostel.price;
            dues=Math.round(dues*100)/100;
            days=Math.round(days);
            let st=startDate.toDateString();
            let en=endDate.toDateString();
            let to=todayDate.toDateString();
            (async () => {
                try
                {
                    const res = await axios.patch(
                        `/hostel/book/${id}`,{st,en,to,localStorageId,flag,dues,days}
                    );
                    const data=res.data;
                    if (Object.keys(data).length == 1) 
                        throw data.message;
                        localStorage.setItem('profile', JSON.stringify({ ...data }));
                    cl='green';
                    setError("You are successfully registered to this hostel!!");
                } 
                catch (e) 
                {
                    console.log(` Axios request failed: ${e}`);
                    cl='red';
                    setError(`${e}`);
                }
            })();
        }
    }

    return (
        <>
        <Navbar />
        <br />
        <br />
        <h1 className={classes.cent}>{hostel.name}</h1>
        <br />
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                <img className={classes.paper} src={`/uploads/${hostel.source}`} alt={hostel.name} width="200" height="200" />
                </Grid>
                <Grid item xs={4} className={classes.paper2}>
                    <h4>Location:</h4>
                    <p>{hostel.address}</p>
                    <br/>
                    <h4>Owner:</h4>
                    <p>{hostel.owner}</p>
                    <br/>
                    <h4>Monthly price:</h4>
                    <p>Rs. {hostel.price}</p>
                    <br/>
                    <h4>Reviews:</h4>
                    <p>{hostel.reviews!=null && hostel.reviews.map((rev) => (
                        <div className={classes.temp} key={i++}>
                            <ReviewCard
                                value={rev.comment}
                                date={rev.date.toString().substring(0,10)}
                                width='300px'
                                height='50px'
                            />
                        </div>
                    ))}
                    </p>
                </Grid>
                <Grid item xs={4} className={classes.paper2}>
                    <div>
                        <h2>Book this hostel:</h2>
                        <br/>
                        <h4>
                            Start Date:
                            <DatePicker className={classes.paper3} selected={startDate} onChange={date => setStartDate(date)} minDate={new Date()} />
                        </h4>
                        <h4>
                            End Date:
                            <DatePicker className={classes.paper4} selected={endDate} onChange={date => setEndDate(date)} minDate={new Date()} />
                        </h4>
                        <Button variant='contained' className={classes.cent2} onClick={handleClick}>
                            Book
                        </Button>
                        <div className={classes.errorDiv} style={{color:`${cl}`}}>{error}</div>
                    </div>
                </Grid>
            </Grid>
        </div>
        </>
    )
}
export default Hostel
