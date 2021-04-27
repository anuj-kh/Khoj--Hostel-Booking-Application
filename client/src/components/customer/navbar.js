import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, List, ListItem, ListItemText, makeStyles, Container, Hidden, Grid , Button } from '@material-ui/core'
import { Link, useHistory, useLocation } from 'react-router-dom';
import SideDrawer from "./sideDrawer"
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch } from 'react-redux';
import * as actionType from '../../constants/actionTypes';
import decode from 'jwt-decode';

const useStyles = makeStyles({
    appbar: {
        background: '#252733'
    },
    nav: {
        marginRight: "auto",
        marginLeft: -12,
    },
    navDisplayFlex: {
        // marginLeft: "auto",
        // marginRight: -12,
        display: 'flex',
        justifyContent: 'space-between'
    },
    linkText: {
      textDecoration: 'none',
      textTransform: 'uppercase',
      color: 'white'
    }
  });

const navLinks = [
    { title: 'Overview', path: '/dashboard' },
    { title: 'My bookings', path: '/dashboard/bookings' },
    { title: 'Reviews', path: '/dashboard/reviews' },
    { title: 'My Account', path: '/dashboard/account' },
    { title: 'New Booking', path: '/dashboard/newBooking' }
  ]

const Navbar = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    const classes = useStyles();

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
    
        history.push('/auth');
        history.go();
    
        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;
    
        if (token) {
          const decodedToken = decode(token);
    
          if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
    
        setUser(JSON.parse(localStorage.getItem('profile')));
      }, [location]);

    return (
        
    <AppBar position="static" className={classes.appbar}>
        <Toolbar>
            <Container className={classes.navDisplayFlex}>

                <List edge="start" component="nav" className={classes.nav} >
                    <Grid container spacing={0} align="center" justify="center" direction="column" >
                        <h1>KHOJ</h1>
                        A Portal for Aspirants
                    </Grid>
                </List>
                
                <Hidden smDown>
                    <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex} >
                        {navLinks.map(({ title, path }) => (
                        <Link to={path} key={title} className={classes.linkText} >
                            <ListItem button>
                            <ListItemText primary={title} />
                            </ListItem>
                        </Link>
                        ))}
                        <Button  className={classes.logout} className={classes.linkText} onClick={logout}>
                            <ExitToAppIcon />
                            <ListItemText primary="Sign out" />
                        </Button>
                    </List>
                </Hidden>

                <Hidden mdUp>
                    <SideDrawer  navLinks={navLinks} />
                </Hidden>

            </Container>
        </Toolbar>
    </AppBar>
    )
}
export default Navbar