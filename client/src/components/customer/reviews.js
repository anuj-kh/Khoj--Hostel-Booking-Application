import React, { useState, useEffect } from 'react'
import Navbar from './navbar'
import { makeStyles } from '@material-ui/core'
import axios from 'axios'

import ReviewCard from './reviewCard'

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
}))

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        const fetchReviews = async () => {
            const res = await axios.get(
                `/dashboard/reviews/6081811e7ae81e03a84122c9`,
            )

            setReviews(res.data)
        }

        fetchReviews()
    })
    const classes = useStyles()
    return (
        <>
            <Navbar />
            <br />
            <br />
            <h1 className={classes.cent}>Your Reviews</h1>
            <br />
            <br />

            {reviews.map((rev) => (
                <div className={classes.root}>
                    <ReviewCard
                        title={rev.hostel}
                        value={rev.comment}
                        date={rev.date}
                    />
                </div>
            ))}

            {/* <div>hello</div> */}

            <br />
        </>
    )
}
export default Reviews
