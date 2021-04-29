import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
    Avatar,
    Button,
    Paper,
    Grid,
    Typography,
    Container,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
} from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import Icon from './icon'
import { signin, signup, gSignin } from '../../actions/auth'
import useStyles from './styles'
import Input from './input'

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    user: '',
    phone:''
}

const Auth = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [form, setForm] = useState(initialState)
    const [isSignup, setIsSignup] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()
    const classes = useStyles()

    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = () => setShowPassword(!showPassword)

  const switchMode = () => {
    setForm(initialState);
    setError("");
    setSuccess("");
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    setSuccess("");
    setError("");
    e.preventDefault();
    if (isSignup) 
    {
        if(form.phone.length!=10)
            setError("Phone number should be of size 10!!");
        else
        {
            if(form.password==form.confirmPassword)
            {
                (async () => {
                const a = await dispatch(signup(form, history));
                if(a!=null)
                    setError(a);
                else  
                {
                    setSuccess("Succesfully registered!!");
                    setIsSignup((prevIsSignup) => !prevIsSignup);
                }
                })();
            }
            else
                setError("The passwords don't match!!");
        }
    } 
    else 
    {
      (async () => {
        const a = await dispatch(signin(form, history));
        if(a!=null)
          setError(a);
      })();
    }
  }
    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        (async () => {
            const a = await dispatch(gSignin(result, history))
            if (a != null) setError(a)
        })()
    }
    const googleError = () =>
        alert('Google Sign In was unsuccessful. Try again later')

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <Container component='main' maxWidth='xs'>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                    {isSignup ? 'Sign up' : 'Sign in'}
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                <div className={classes.successDiv}>{success}</div>
                    <Grid container spacing={2}>
                        {isSignup && (
                            <>
                                <Input
                                    name='firstName'
                                    label='First Name'
                                    handleChange={handleChange}
                                    autoFocus
                                    half
                                />
                                <Input
                                    name='lastName'
                                    label='Last Name'
                                    handleChange={handleChange}
                                    half
                                />
                                <Input
                                    name='email'
                                    label='Email Address'
                                    handleChange={handleChange}
                                    type='email'
                                />
                                <Input
                                    name='phone'
                                    label='Phone number'
                                    handleChange={handleChange}
                                    type='number'
                                />
                                <Input
                                    name='password'
                                    label='Password'
                                    handleChange={handleChange}
                                    type={showPassword ? 'text' : 'password'}
                                    handleShowPassword={handleShowPassword}
                                />
                                <Input
                                    name='confirmPassword'
                                    label='Repeat Password'
                                    handleChange={handleChange}
                                    type={showPassword ? 'text' : 'password'}
                                />

                                <FormControl
                                    className={classes.formControl}
                                    required>
                                    <InputLabel>Type of user</InputLabel>
                                    <Select
                                        name='user'
                                        value={form.user}
                                        className={classes.formControl}
                                        onChange={handleChange}>
                                        <MenuItem value={'Student'}>
                                            Student
                                        </MenuItem>
                                        <MenuItem value={'Service Provider'}>
                                            Service Provider
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </>
                        )}
                        {!isSignup && (
                            <>
                                <Input
                                    name='email'
                                    label='Email Address'
                                    handleChange={handleChange}
                                    type='email'
                                    autoFocus
                                />
                                <Input
                                    name='password'
                                    label='Password'
                                    handleChange={handleChange}
                                    type={showPassword ? 'text' : 'password'}
                                    handleShowPassword={handleShowPassword}
                                />
                            </>
                        )}
                    </Grid>
                    <div className={classes.errorDiv}>{error}</div>
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'
                        className={classes.submit}>
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <GoogleLogin
                        clientId={GOOGLE_LOGIN_CLIENT_ID}
                        render={(renderProps) => (
                            <Button
                                className={classes.googleButton}
                                // color='primary'
                                fullWidth
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                startIcon={<Icon />}
                                variant='contained'>
                                Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleError}
                        cookiePolicy='single_host_origin'
                    />
                    <Grid container justify='flex-end'>
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup
                                    ? 'Already have an account? Sign in'
                                    : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth