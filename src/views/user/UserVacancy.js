import React, { useState } from 'react';
import Header from "views/user/Header.js";
import Footer from "views/user/Footer.js";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({

    layout: {
        width: 'auto',
        height: '67vh',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
    typography: {
        marginBottom: '20px'
    }
}));

const UserVacancy = () => {
    const classes = useStyles();
    let history = useHistory();
    const [position, setPosition] = useState(0);
    const handleChange = (e) => {
        setPosition(e.target.value);
    };

    return (
        <React.Fragment>
            <Header />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography className={classes.typography} component="h1" variant="h1" align="left">Vacancy</Typography>
                    <Typography className={classes.typography} variant="h4" align="left">Position: Developer</Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                id="startDate"
                                label="Start Date"
                                defaultValue="2021/06/02"
                                fullWidth
                                autoComplete="given-name"
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                id="endDate"
                                label="End Date"
                                defaultValue="2021/06/07"
                                fullWidth
                                autoComplete="family-name"
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                id="amount"
                                label="Amount"
                                defaultValue="50"
                                fullWidth
                                autoComplete="given-name"
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                id="status"
                                label="Status"
                                defaultValue="Recruiting"
                                fullWidth
                                autoComplete="family-name"
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                id="name"
                                name="name"
                                label="Name"
                                fullWidth
                                autoComplete="shipping address-line1"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Select fullWidth variant="outlined" value={position} onChange={handleChange} >
                                <MenuItem value={0}>Internship</MenuItem>
                                <MenuItem value={1}>Fresher</MenuItem>
                                <MenuItem value={2}>Junior</MenuItem>
                                <MenuItem value={3}>Senior</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                id="email"
                                name="email"
                                label="Email"
                                fullWidth
                                autoComplete="shipping address-line1"
                            />
                        </Grid>
                    </Grid>
                    <div className={classes.buttons}>
                        <Button onClick={() => history.goBack()} className={classes.button}>
                            Back
                    </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >
                            Confirm
                        </Button>
                    </div>
                </Paper>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default UserVacancy;