import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";
import Box from '@material-ui/core/Box';
import Header from "../../../components/Headers/Header.js";
import Container from "@material-ui/core/Container";
import componentStyles from "assets/theme/views/admin/tables.js";
import Card from "@material-ui/core/Card";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(componentStyles);

const VacanciesForm = () => {
    let history = useHistory();
    let location = useLocation()
    const [data, setData] = useState({ id: '', title: '', amount: '', createdDate: '', endDate: '', status: '', depId: '' });
    const classes = useStyles();
    const [status, setStatus] = useState(0);
    const deps = [{ id: '1', name: 'Telsoft', status: '1' }, { id: '2', name: 'Bzcom', status: '1' }];

    const [depId, setDepId] = useState('1');

    const handleChange = (e) => {
        setStatus(e.target.value);
    };

    const handleChangeDepartment = (e) => {
        setDepId(e.target.value);
    }

    const [selectedStartDate, setSelectedStartDate] = useState(new Date('2021-06-02T21:11:54'));

    const handleStartDateChange = (date) => {
        setSelectedStartDate(date);
    };
    const [selectedEndDate, setSelectedEndDate] = useState(new Date('2021-06-02T21:11:54'));

    const handleEndDateChange = (date) => {
        setSelectedEndDate(date);
    };

    useEffect(() => {
        if (location.state !== null) {
            setData(location.state.data);
            setStatus(location.state.data.status);
            setDepId(location.state.data.depId);
        }
    }, [location]);

    return (
        <>
            <Header />
            <Container
                maxWidth={false}
                component={Box}
                marginTop="-6rem"
                classes={{ root: classes.containerRoot2 }}
            >
                <Card classes={{ root: classes.cardRoot1 }}>
                    <Typography classes={{ root: classes.typographyHeader }} variant="h2" align="center" gutterBottom>Edit Vacancies</Typography>
                    <Container>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField fullWidth variant="outlined" label="Title" value={data.title} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth variant="outlined" type="number" label="Amount" value={data.amount} />
                            </Grid>
                            <Grid item xs={12} >
                                <Select fullWidth variant="outlined" value={depId} onChange={handleChangeDepartment} >
                                    {deps.map((dep) => (
                                        <MenuItem key={dep.id} value={dep.id}>{dep.name}</MenuItem>
                                    ))}
                                </Select>
                            </Grid>
                            <Grid item xs={12} >
                                <MuiPickersUtilsProvider utils={DateFnsUtils} >
                                    <Grid container item justify="space-between"
                                        alignItems="flex-end" direction="row" spacing={3} >
                                        <Grid>
                                            <KeyboardDatePicker
                                                format="MM/dd/yyyy"
                                                id="date-picker-inline"
                                                label="Date picker start"
                                                value={selectedStartDate}
                                                onChange={handleStartDateChange}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                            />
                                        </Grid>
                                        <Grid>
                                            <KeyboardDatePicker
                                                id="date-picker-dialog"
                                                label="Date picker end"
                                                format="MM/dd/yyyy"
                                                value={selectedEndDate}
                                                onChange={handleEndDateChange}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                            />
                                        </Grid>
                                        <Grid>
                                            <Select fullWidth variant="outlined" value={status} onChange={handleChange} >
                                                <MenuItem value={0}>Disable</MenuItem>
                                                <MenuItem value={1}>Enable</MenuItem>
                                            </Select>
                                        </Grid>
                                    </Grid>
                                </MuiPickersUtilsProvider>
                            </Grid>
                            <Grid item xs={12} align="right" >
                                <Button classes={{ root: classes.buttonVcf }} variant="contained" color="primary">Confirm</Button>
                                <Button classes={{ root: classes.buttonVcf }} variant="contained" color="primary" onClick={() => history.goBack()}>Back</Button>
                            </Grid>
                        </Grid>
                    </Container>
                </Card>
            </Container>
        </>
    )
};
export default VacanciesForm;