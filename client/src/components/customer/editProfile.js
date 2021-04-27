import React, { useState, useEffect } from 'react'
import Navbar from './navbar'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Avatar from '@material-ui/core/Avatar'

import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',

        '& > *': {
            margin: theme.spacing(15),
            width: theme.spacing(69),
            height: theme.spacing(25),
        },
        '& .MuiTextField-root': {
            margin: theme.spacing(3),
            width: '25ch',
        },
    },
    cent: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 5,
        width: '50ch',
        height: '6ch',
    },
    err: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontWeight: 'bold',
    },
}))

let cl = 'green'

export default function EditProfile() {
    const classes = useStyles()
    const [error, setError] = useState('')
    const localStoragee = JSON.parse(localStorage.getItem('profile')).result

    const [value, setValue] = React.useState({
        name: `${localStoragee.name}`,
        phone: `${localStoragee.phone}`,
        email: `${localStoragee.email}`,
        address: `${localStoragee.address}`,
    })
    const [user, setUser] = useState(`${localStoragee.name}`)

    const handleChange = (event) => {
        const newValue = { ...value }
        newValue[event.target.id] = event.target.value
        setValue(newValue)
    }
    const handleClick = async (event) => {
        event.preventDefault()
        try {
            console.log(value)

            const response = await axios.patch(
                `/dashboard/editProfile/${localStoragee._id}`,
                value,
                { 'Content-Type': 'multipart/form-data' },
            )
            const data = response.data
            if (Object.keys(data).length == 1) throw data.message
            cl = 'green'
            setError('Details succesfully updated!!')
            setUser(data.result.name)
            localStorage.setItem('profile', JSON.stringify({ ...data }))
        } catch (e) {
            console.log(` Axios request failed: ${e}`)
            cl = 'red'
            setError(`${e}`)
        }
    }
    const handlePhoto = (e) => {
        e.preventDefault()
        setValue({ ...value, photo: e.target.files[0] })
    }

    return (
        <>
            <Navbar />
            <br />
            <br />
            <br />
            <br />
            <br />
            <form
                className={classes.root}
                noValidate
                autoComplete='off'
                encType='multipart/form-data'>
                <div
                    className={classes.cent}
                    style={{
                        margin: '0',
                        width: '45ch',
                        height: '6ch',
                        fontSize: '20px',
                    }}>
                    <div>
                        <Avatar
                            alt={user}
                            style={{ height: 140, width: 128 }}
                            src={`/user.png`}
                        />
                    </div>
                    <div>
                        <h2>{user}</h2>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div style={{ marginTop: 20 }}>
                    <TextField
                        id='name'
                        label='Name'
                        value={value.name}
                        onChange={handleChange}
                        variant='outlined'
                    />
                    <TextField
                        disabled
                        id='user'
                        label='User'
                        defaultValue={localStoragee.user}
                        variant='outlined'
                    />
                    <TextField
                        name='email'
                        id='email'
                        label='Email'
                        type='email'
                        value={value.email}
                        onChange={handleChange}
                        variant='outlined'
                    />
                    <TextField
                        id='phone'
                        label='Phone No.'
                        type='number'
                        value={value.phone}
                        onChange={handleChange}
                        variant='outlined'
                    />
                    <TextField
                        id='address'
                        label='Address'
                        fullWidth
                        value={value.address}
                        onChange={handleChange}
                        style={{ width: '55ch' }}
                        multiline
                        rows={3}
                        variant='outlined'
                    />
                </div>
                <div className={classes.cent}>
                    <Link to={'/dashboard/account'}>
                        <Button variant='contained'>Back</Button>
                    </Link>
                    <Button
                        type='submit'
                        onClick={handleClick}
                        style={{ margin: 0 }}
                        variant='contained'>
                        Submit
                    </Button>
                </div>
            </form>
            <br />
            <div className={classes.err} style={{ color: `${cl}` }}>
                {error}
            </div>
        </>
    )
}
