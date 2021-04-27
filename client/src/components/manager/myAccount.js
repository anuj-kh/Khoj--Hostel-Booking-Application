import React from 'react'
import Navbar from '../customer/navbar'
import AccountTable from '../customer/accountTable.js'
import { makeStyles, Button } from '@material-ui/core'
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
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
      }
})
const MyAccount = () => {
    const classes = useStyles()
    return (
        <div>
            <Navbar />
            <br />
            <br />
            <h1 className={classes.cent}>Your Account</h1>
            <br />
            <br />
            <AccountTable />

            <div className={classes.cent}>
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
