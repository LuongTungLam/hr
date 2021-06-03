import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    small: {
        width: theme.spacing(5),
        height: theme.spacing(5),
        marginLeft: "25px"
    },
}));


const Header = () => {
    let location = useLocation()
    const classes = useStyles();
    const [user, setUser] = useState({});

    useEffect(() => {
        if (location.state !== null) {
            setUser(location.state)
        }
    }, [location]);

    return (
        <>
            <AppBar position="sticky" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h2" color="inherit" noWrap className={classes.toolbarTitle}>Company name</Typography>
                    <nav>
                        <Link variant="button" color="textPrimary" className={classes.link}>Features</Link>
                        <Link variant="button" color="textPrimary" className={classes.link}> Enterprise</Link>
                        <Link variant="button" color="textPrimary" className={classes.link}>Support</Link>
                    </nav>
                    {location.state == null && <Button color="primary" variant="outlined" className={classes.link}>Login</Button>}
                    {location.state !== null && <Avatar className={classes.small}></Avatar>}
                </Toolbar>
            </AppBar>
            {/* Hero unit */}
        </>
    )
}

export default Header;