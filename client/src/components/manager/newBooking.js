import React, { useState, useEffect } from 'react'
import Navbar from '../customer/navbar'
import { makeStyles, Grid, Button, TextField } from '@material-ui/core' 

import { useParams } from 'react-router-dom';
import axios from 'axios'
import DatePicker from "react-datepicker";  
import "react-datepicker/dist/react-datepicker.css";
import ReviewCard from '../customer/reviewCard'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        '& > *': {
            margin: theme.spacing(5),
            width: theme.spacing(200),
            height: theme.spacing(25),
        },
    },
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
    paper5: {
        marginTop: theme.spacing(6),
        textAlign: 'center',
        // borderRadius: 25,
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

    const classes = useStyles();
    const localStoragee = JSON.parse(localStorage.getItem('profile')).result;
    const [hostel,setHostel]=useState((localStoragee.currentHostel)?localStoragee.currentHostel.hostel:"0");
    const [img, setImg] = useState(`${localStoragee.img}`)
    const [path, setPath] = useState(`/uploads/${hostel.source}`)

    const [value, setValue] = React.useState({
        hostel: '',
        address: '',
        cost: '',
    })
    
    const handleChange = (event) => {
        const newValue = { ...value }
        newValue[event.target.id] = event.target.value
        newValue.image=hostel.source
        setValue(newValue)
        console.log(value)
    }

    const handleClick = async (event) => {
        event.preventDefault()
        try {
            const formData = new FormData()
            formData.append('hostel', value.hostel)
            formData.append('address', value.address)
            formData.append('cost', value.cost)
            formData.append('img', img)
            const response = await axios.patch(
                `/hostel/register/${localStoragee._id}`,
                formData,{
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                },
            )
            const data=response.data;
            console.log(data);
            if (Object.keys(data).length == 1) 
                throw data.message;
            localStorage.setItem('profile', JSON.stringify({ ...data }));
            setHostel((localStoragee.currentHostel)?localStoragee.currentHostel.hostel.name:"0");
        } catch (e) {
            console.log(` Axios request failed: ${e}`)
        }
    }

    const handleClick2 = async (event) => {
        event.preventDefault()
        const nValue={...value}
        nValue.id=hostel._id;
        try {
            const response = await axios.patch(
                `/hostel/register2/${localStoragee._id}`,
                nValue,
            )
            const data=response.data;
            console.log(data);
            if (Object.keys(data).length == 1) 
                throw data.message;
            localStorage.setItem('profile', JSON.stringify({ ...data }));
            setHostel((localStoragee.currentHostel)?localStoragee.currentHostel.hostel:"0");
        } catch (e) {
            console.log(` Axios request failed: ${e}`)
        }
    }

    const handlePhoto = (e) => {
        setImg(e.target.files[0])

    }

    return (
        <>
        <Navbar />
        <br />
        <br />
        {
        hostel==="0" &&
        <>
            <h1 className={classes.cent}>
                You haven't registered your hostel yet
            </h1>
            <Grid container spacing={2}>
                <Grid item xs={12} className={classes.paper5}>
                    <div>
                        <h2>Register your hostel:</h2>
                        <br/>

                        <form className={classes.root} noValidate autoComplete='off'>
                            <div>
                                <TextField
                                    id='hostel'
                                    label='Hostel Name'
                                    placeholder='Hostel Name'
                                    value={value.hostel}
                                    variant='outlined'
                                    onChange={handleChange}
                                />
                                <br/>
                                <br/>
                                <TextField
                                    id='address'
                                    label='Hostel Address'
                                    placeholder='Hostel Address'
                                    value={value.address}
                                    variant='outlined'
                                    onChange={handleChange}
                                />
                                <br/>
                                <br/>
                                <TextField
                                    id='img'
                                    type='file'
                                    // label='Hostel Photo'
                                    placeholder=''
                                    variant='outlined'
                                    onChange={handlePhoto}
                                />
                                <br/>
                                <br/>
                                <TextField
                                    id='cost'
                                    label='Monthly cost'
                                    type='Number'
                                    placeholder='Monthly cost in Rs.'
                                    value={value.cost}
                                    variant='outlined'
                                    onChange={handleChange}
                                />
                                <br/>
                                <br/>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-around',
                                    }}>
                                    <Button
                                        type='submit'
                                        onClick={handleClick}
                                        style={{ marginTop: 10 }}
                                        variant='contained'>
                                        Submit
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </>
        }        

        {
        hostel!="0" &&
        <>
            <h1 className={classes.cent}>{hostel.name}</h1>
            <br />
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                    <img className={classes.paper} src={path} alt={hostel.name} width="200" height="200" />
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
                            <h2>Update details:</h2>
                            <br/>
                            <TextField
                                id='hostel'
                                label='hostel Name'
                                value={value.hostel}
                                onChange={handleChange}
                                variant='outlined'
                            />
                            <br/>
                            <br/>
                            <TextField
                                id='address'
                                label='Address'
                                value={value.address}
                                onChange={handleChange}
                                variant='outlined'
                            />
                            <br/>
                            <br/>
                            <TextField
                                id='cost'
                                label='Monthly price'
                                value={value.cost}
                                type="Number"
                                onChange={handleChange}
                                variant='outlined'
                            />
                            <br/>
                            <br/>
                            <div >
                                <Button
                                    type='submit'
                                    onClick={handleClick2}
                                    style={{ marginTop: 10 }}
                                    variant='contained'>
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
        }      
        </>
    )
}
export default Hostel
