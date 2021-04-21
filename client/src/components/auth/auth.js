import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container , Select , MenuItem, InputLabel,FormControl } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Icon from './icon';
import { signin, signup, gSignin } from '../../actions/auth';
import useStyles from './styles';
import Input from './input';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '', user:'' };

const Auth = () => {
  const [error, setError] = useState('');
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setForm(initialState);
    setError("");
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    if (isSignup) 
    {
      if(form.password==form.confirmPassword)
      {
        (async () => {
          const a = await dispatch(signup(form, history));
          console.log(a);
          if(a!=null)
            setError(a);
          else  
          {
            setError("");
            setIsSignup((prevIsSignup) => !prevIsSignup);
          }
        })();
      }
      else
        setError("The passwords don't match!!");
    } 
    else 
    {
      (async () => {
        const a = await dispatch(signin(form, history));
        console.log(a);
        if(a!=null)
          setError(a);
      })();
    }
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
      (async () => {
        const a = await dispatch(gSignin(result, history));
        console.log(a);
        if(a!=null)
          setError(a);
      })();
  };

  const googleError = () => alert('Google Sign In was unsuccessful. Try again later');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  }


  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            { isSignup && (
              <>
                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} /> 
                
                <FormControl className={classes.formControl} required>
                  <InputLabel>Type of user</InputLabel> 
                  <Select name="user" value={form.user} className={classes.formControl} onChange={handleChange}>
                    <MenuItem value={0}>Student</MenuItem>
                    <MenuItem value={1}>Service Provider</MenuItem>
                    <MenuItem value={2}>Admin</MenuItem>
                  </Select>
                </FormControl>
              </>
            )}
            { !isSignup && (
              <>
                <Input name="email" label="Email Address" handleChange={handleChange} type="email" autoFocus />
                <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
              </>
            )}
          </Grid>
          <div className={classes.errorDiv}>{error}</div>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            { isSignup ? 'Sign Up' : 'Sign In' }
          </Button>
          <GoogleLogin
            clientId="868546255367-a9e3v26e7eaig3hleuukheu6d72kqdge.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;