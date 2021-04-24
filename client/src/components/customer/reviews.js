import React, { useState, useEffect } from 'react'
import Navbar from './navbar'
import { makeStyles } from '@material-ui/core'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import ReviewCard from './reviewCard'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        '& > *': {
            margin: theme.spacing(5),
            width: theme.spacing(100),
            height: theme.spacing(25),
        },
    },
    cent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addrev: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}))

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const localStorageId = JSON.parse(localStorage.getItem('profile')).result
        ._id

    const fetchReviews = async () => {
        const res = await axios.get(`/dashboard/reviews/${localStorageId}`)

        setReviews(res.data)
    }
    useEffect(() => {
        fetchReviews()
    })
    const classes = useStyles()

    const [value, setValue] = React.useState({
        hostel: '',
        comment: '',
    })

    const handleChange = (event) => {
        const newValue = { ...value }
        newValue[event.target.id] = event.target.value
        setValue(newValue)
        console.log(value)
    }
    const handleClick = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.patch(
                `/dashboard/reviews/${localStorageId}`,
                value,
            )
            console.log(' Returned data:', response)

            setValue({
                hostel: '',
                comment: '',
            })
            {
                handleChange()
            }
        } catch (e) {
            console.log(` Axios request failed: ${e}`)
        }
    }
    var i = 0

    return (
        <>
            <Navbar />
            <br />
            <br />
            <h1 className={classes.cent}>Your Reviews</h1>
            <br />
            <br />

            {reviews.map((rev) => (
                <div className={classes.root} key={i++}>
                    <ReviewCard
                        title={rev.hostel}
                        value={rev.comment}
                        date={Date(JSON.stringify(rev.date))}
                    />
                </div>
            ))}

            <br />
            <form className={classes.root} noValidate autoComplete='off'>
                <div>
                    <TextField
                        id='hostel'
                        label='Hostel'
                        placeholder='Hostel Name'
                        value={value.hostel}
                        multiline
                        variant='outlined'
                        onChange={handleChange}
                    />

                    <TextField
                        id='comment'
                        label='Review'
                        style={{ marginTop: 10 }}
                        placeholder='Please write your review'
                        value={value.comment}
                        fullWidth
                        multiline
                        rows={3}
                        // InputLabelProps={{
                        //     shrink: true,
                        // }}
                        variant='outlined'
                        onChange={handleChange}
                    />
                    <Button
                        type='submit'
                        onClick={handleClick}
                        style={{ marginTop: 10 }}
                        variant='contained'>
                        Submit
                    </Button>
                </div>
            </form>
        </>
    )
}
export default Reviews
