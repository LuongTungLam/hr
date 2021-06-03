import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useLocation, useHistory } from "react-router-dom";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
    let location = useLocation();
    let history = useHistory();
    const classes = useStyles();
    const [user, setUser] = useState({ email: '', password: '', status: '' });
    const empty = { email: '', password: '', status: '' };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    useEffect(() => {
        if (location.state !== null) {
            setUser(location.state)
        }
    }, [location]);


    const handleDetail = (e) => {
        setAnchorEl(e.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        handleClose();
        history.replace({ pathname: '', state: empty });
    }

    const handleLogin = () => {
        history.push('/auth/login')
    }

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
                    {user.email == "" && <Button color="primary" variant="outlined" onClick={handleLogin} className={classes.link}>Login</Button>}
                    {user.email != "" && <Avatar className={classes.emall} onClick={handleDetail}></Avatar>}
                    <Menu
                        id="fade-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
            {/* Hero unit */}
        </>
    )
}

export default Header;