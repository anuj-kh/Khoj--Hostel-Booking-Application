import React, { useState, useEffect } from 'react';
import Navbar from './navbar'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';
import axios from 'axios'
import Avatar from '@material-ui/core/Avatar';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection:'column',
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
    margin: 10,width:'50ch',height:'6ch' 
},
}));

export default function EditProfile() {
  const classes = useStyles();
  const [user, setUser] = useState({})
  const localStorageId = JSON.parse(localStorage.getItem('profile')).result._id
  const [value, setValue] = React.useState({
    name: ``,
    phone: ``,
    email: ``,
    address: ``
})
 
  useEffect(() => {
      const fetchUser = async () => {
          const res = await axios.get(
              `/dashboard/account/${localStorageId}`,
          )

          setUser(res.data)
      }
        
      fetchUser()
      // setValue({name:`${user.name}`,phone:`${user.phone}`,email:`${user.email}`,address:`${user.address}`})
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
      const response = await axios.patch(`/dashboard/editProfile/${localStorageId}`, value);
      console.log(' Returned data:', response);
     
      
      {handleChange()}
    } catch (e) {
      console.log(` Axios request failed: ${e}`);
    }
  
}

  return (

    <>
    
    <Navbar />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.cent} style={{margin:'0',width:'40ch',height:'6ch',fontSize:'20px' }}>
      <Avatar alt={user.name} style={{height:140,width:128}} src="/user.png" />
           <h2>{user.name}</h2>
      </div>
      <br />
            <br />
            <br />
      <div style={{marginTop:20}}>
        <TextField
          id="name"
          label="Name"
          value={value.name}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          disabled
          id="user"
          label="User"
          defaultValue="Student"
          
          variant="outlined"
        />
        <TextField
          id="email"
          label="Email"
          // defaultValue={`${user.email}`}
          value={value.email}
          onChange={handleChange}

          variant="outlined"
        />
        <TextField
          id="phone"
          label="Phone No."
          // defaultValue={`${user.phone}`}
          value={value.phone}
          onChange={handleChange}

          variant="outlined"
        />
        <TextField
          id="address"
          label="Address"
          fullWidth
          // defaultValue={`${user.address}`}
          value={value.address}
          onChange={handleChange}

          style={{width:'55ch'}}
          multiline
          rows={3}
          
          variant="outlined"
        /> 
        
        
        
      </div>
      <div className={classes.cent}>
      <Link to={"/dashboard/account"}  >
                <Button variant='contained' >
                    Back
                </Button>
            </Link>
      <Button
                        type='submit'
                        onClick={handleClick}
                        // className={classes.cent}
                        style={{ margin: 0 }}
                        variant='contained'>
                        Submit
                    </Button>
                    </div>
    </form>
    </>
  );
}
