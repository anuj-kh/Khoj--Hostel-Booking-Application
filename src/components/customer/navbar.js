import React from 'react'
import { AppBar, Toolbar, IconButton, List, ListItem, ListItemText, makeStyles, Container, Hidden, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom';
import SideDrawer from "./sideDrawer"
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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
    { title: 'My Account', path: '/dashboard/account' }
  ]

const Navbar = () => {
    const classes = useStyles();
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
                        <Link to='/login' className={classes.linkText} >
                            <ListItem button>
                                <ExitToAppIcon />
                                <ListItemText primary="Sign out" />
                            </ListItem>
                        </Link>
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