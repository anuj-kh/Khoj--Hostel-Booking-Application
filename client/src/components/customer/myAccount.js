import React from 'react'
import Navbar from './navbar'
import AccountTable from './accountTable.js'
import { makeStyles, Button } from '@material-ui/core'
import { Link } from 'react-router-dom';
import {Grid,Avatar} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    cent: {
        display: 'flex',
        
        justifyContent: 'center',
        alignItems: 'center',
    },
    cent2: {
        margin: '2rem',
    },
    linkText: {
        textDecoration: 'none',
        textTransform: 'uppercase',
        color: 'white'
      },
      paper2: {
        marginLeft: theme.spacing(45),
        // textAlign: 'right',
        // borderRadius: 25,
    },
}));

const MyAccount = () => {
    const classes = useStyles()
    const localStoragee = JSON.parse(localStorage.getItem('profile')).result
    return (
        <div>
            <Navbar />
            <br />
            <br />
            <h1 className={classes.cent}>Your Account</h1>
            <br />
            <br />
            <Grid container spacing={2}>
                <Grid item xs={1} className={classes.paper2}>
                    <Avatar
                        alt={`${localStoragee.name}`}
                        style={{ height: 140, width: 128 }}
                        src={`/uploads/${localStoragee.img}`}
                    />
                </Grid>
                <Grid item xs={4}>
                    <AccountTable />
                </Grid>
            </Grid>

            <div className={classes.cent}>
            <Link to={"/dashboard/payment"} className={classes.linkText} >
                <Button variant='contained' className={classes.cent2}>
                    Pay your charges
                </Button>
            </Link>
            <Link to={"/dashboard/newBooking"} className={classes.linkText} >
                <Button variant='contained' className={classes.cent2}>
                    New Booking
                </Button>
            </Link>
            <Link to={"/dashboard/editProfile"} className={classes.linkText} >
                <Button variant='contained' className={classes.cent2}>
                    Edit Profile
                </Button>
            </Link>
            </div>
        </div>
    )
}
export default MyAccount
