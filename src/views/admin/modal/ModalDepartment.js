import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    select: {
        marginTop: "10px"
    }
});

const ModalDepartment = ({ open, setOpen }) => {
    const classes = useStyles();

    const [status, setStatus] = useState('');

    const handleChange = (event) => {
        setStatus(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Department</DialogTitle>
                <DialogContent>
                    <DialogContentText>Form create Department</DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Department Name"
                        fullWidth
                        variant="outlined"
                    />
                    <Select className={classes.select} variant="outlined" value={status} onChange={handleChange} fullWidth>
                        <MenuItem value={0}>Disable</MenuItem>
                        <MenuItem value={1}>Enable</MenuItem>
                    </Select>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                    <Button onClick={handleClose} color="primary">Confirm</Button>
                </DialogActions>
            </Dialog>
        </>
    )
};
export default ModalDepartment;