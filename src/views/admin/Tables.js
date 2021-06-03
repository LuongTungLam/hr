import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
// @material-ui/lab components
import TablePagination from '@material-ui/core/TablePagination';

// core components
import Header from "components/Headers/Header.js";

import componentStyles from "assets/theme/views/admin/tables.js";
import { IconButton, Button, Grid } from '@material-ui/core';
import { MdEdit, MdDeleteForever, MdRemoveRedEye } from "react-icons/md";
import ModalDepartment from "views/admin/modal/ModalDepartment";

const useStyles = makeStyles(componentStyles);

const Tables = () => {
  let history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const [curriculum, setCurriculum] = useState(null);
  const [open, setOpen] = useState(false);

  const data = [{ id: '1', title: 'a', amount: '10', createdDate: '2021/06/02', endDate: '2021/06/07', status: '1', depId: '1' }];
  const departments = [{ id: '1', name: 'Telsoft', status: '1' }];

  const [page, setPage] = React.useState(0);

  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const [page1, setPage1] = React.useState(0);

  const [rowsPerPage1, setRowsPerPage1] = React.useState(5);

  const handleChangePage1 = (event, newPage) => {
    setPage1(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeRowsPerPage1 = (event) => {
    setRowsPerPage1(parseInt(event.target.value, 10));
    setPage1(0);
  };

  const handleAddVacancy = () => {
    history.push({ pathname: `/admin/vacanciesForm`, state: null });
  }

  const handleEditVacancy = (e) => {
    history.push({ pathname: `/admin/vacanciesForm`, state: { data: e } });
  }

  useEffect(() => {

  }, []);

  const hanldeClickOpenModal = () => {
    setOpen(true);
  }

  return (
    <>
      <Header />
      <ModalDepartment open={open} setOpen={setOpen} />
      {/* Page content */}
      <Grid container spacing={1}>
        <Grid item xs={5}>
          <Container
            maxWidth={false}
            component={Box}
            marginTop="-6rem"
            classes={{ root: classes.containerRoot1 }}
          >
            <Card classes={{ root: classes.cardRoot }}>
              <Box display="flex">
                <Box width="82%">
                  <CardHeader
                    className={classes.cardHeader}
                    title="Department"
                    titleTypographyProps={{
                      component: Box,
                      marginBottom: "0!important",
                      variant: "h3",
                    }}
                  >

                  </CardHeader>
                </Box>
                <Box alignSelf="center">
                  <Button onClick={() => hanldeClickOpenModal()} variant="outlined" color="primary">Add New</Button>
                </Box>
              </Box>
              <TableContainer>
                <Box
                  component={Table}
                  alignItems="center"
                  marginBottom="0!important"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot + " " + classes.tableCellRootHead,
                        }}
                      >
                        Department Name
                  </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot + " " + classes.tableCellRootHead,
                        }}
                      >
                        Status
                  </TableCell>

                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot + " " + classes.tableCellRootHead,
                        }}
                      ></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {(rowsPerPage > 0
                      ? departments.slice(page1 * rowsPerPage1, page1 * rowsPerPage1 + rowsPerPage1)
                      : departments
                    ).map((cv) => (
                      <TableRow key={cv.id}>
                        <TableCell
                          classes={{
                            root:
                              classes.tableCellRoot +
                              " " +
                              classes.tableCellRootBodyHead,
                          }}
                          component="th"
                          variant="head"
                          scope="row"
                        >
                          <Box fontSize=".875rem" component="span">
                            {cv.name}
                          </Box>
                        </TableCell>

                        <TableCell classes={{ root: classes.tableCellRoot }}>
                          <Box paddingTop=".35rem" paddingBottom=".35rem">
                            {cv.status == 1 && <Box bgcolor="#66FFCC" textAlign="center" padding="6%" borderRadius="8px">Enable</Box>}
                            {cv.status == 0 && <Box bgcolor="#F2F2F2" textAlign="center" padding="6%" borderRadius="8px">Disable</Box>}
                          </Box>
                        </TableCell>
                        <TableCell
                          classes={{ root: classes.tableCellRoot }}
                          align="right"
                        >
                          <IconButton onClick={() => hanldeClickOpenModal()}>
                            <MdRemoveRedEye />
                          </IconButton>
                          <IconButton onClick={() => hanldeClickOpenModal()}>
                            <MdEdit />
                          </IconButton>
                        </TableCell>
                      </TableRow>

                    ))}
                  </TableBody>
                </Box>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                count={departments.length}
                page={page1}
                onChangePage={handleChangePage1}
                rowsPerPage={rowsPerPage1}
                onChangeRowsPerPage={handleChangeRowsPerPage1}
                colSpan={3}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                }}
              />
            </Card>
          </Container>
        </Grid>

        <Grid item xs={7}>
          <Container
            maxWidth={false}
            component={Box}
            marginTop="-6rem"
            classes={{ root: classes.containerRoot }}>
            <Card classes={{ root: classes.cardRoot }}>
              <Box display="flex">
                <Box width="88%">
                  <CardHeader
                    className={classes.cardHeader}
                    title="Vacancies"
                    titleTypographyProps={{
                      component: Box,
                      marginBottom: "0!important",
                      variant: "h3",
                    }}
                  >
                  </CardHeader>
                </Box>
                <Box alignSelf="center">
                  <Button variant="outlined" color="primary" onClick={() => handleAddVacancy()}>Add New</Button>
                </Box>
              </Box>
              <TableContainer>
                <Box
                  component={Table}
                  alignItems="center"
                  marginBottom="0!important"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot + " " + classes.tableCellRootHead,
                        }}
                      >
                        Title
                  </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot + " " + classes.tableCellRootHead,
                        }}
                      >
                        Amount
                  </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot + " " + classes.tableCellRootHead,
                        }}
                      >
                        Status
                  </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot + " " + classes.tableCellRootHead,
                        }}
                      >
                        Department
                  </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot + " " + classes.tableCellRootHead,
                        }}
                      ></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {(rowsPerPage > 0
                      ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      : data
                    ).map((cv) => (
                      <TableRow key={cv.id}>
                        <TableCell
                          classes={{
                            root:
                              classes.tableCellRoot +
                              " " +
                              classes.tableCellRootBodyHead,
                          }}
                          component="th"
                          variant="head"
                          scope="row"
                        >
                          <Box display="flex" alignItems="flex-start">
                            <Box fontSize=".875rem" component="span">
                              {cv.title}
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell classes={{ root: classes.tableCellRoot }}>
                          <Box paddingTop=".35rem" paddingBottom=".35rem">
                            {cv.amount}
                          </Box>
                        </TableCell>
                        <TableCell classes={{ root: classes.tableCellRoot }}>
                          <Box paddingTop=".35rem" paddingBottom=".35rem">
                            {cv.status}
                          </Box>
                        </TableCell>
                        <TableCell classes={{ root: classes.tableCellRoot }}>
                          <Box paddingTop=".35rem" paddingBottom=".35rem">
                            {cv.depId}
                          </Box>
                        </TableCell>
                        <TableCell
                          classes={{ root: classes.tableCellRoot }}
                          align="right"
                        >
                          <IconButton >
                            <MdRemoveRedEye />
                          </IconButton>
                          <IconButton >
                            <MdEdit onClick={() => handleEditVacancy(cv)} />
                          </IconButton>
                          <IconButton >
                            <MdDeleteForever />
                          </IconButton>
                        </TableCell>
                      </TableRow>

                    ))}
                  </TableBody>
                </Box>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                count={data.length}
                page={page}
                onChangePage={handleChangePage}
                rowsPerPage={rowsPerPage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                colSpan={3}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                }}
              />
            </Card>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default Tables;
