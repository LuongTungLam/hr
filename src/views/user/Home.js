import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from "views/user/Header.js";
import Footer from "views/user/Footer.js";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({

    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },

    maxHeight: {
        height: '56vh'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    small: {
        width: theme.spacing(5),
        height: theme.spacing(5),
        marginLeft: "25px"
    },
}));



const Home = () => {

    let history = useHistory();
    const classes = useStyles();
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const handleClickVacancy = () => {
        history.push({ pathname: "/user/vacancy", state: null });
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Header />
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h1" align="center" color="textPrimary" gutterBottom>Album layout</Typography>
                        <Typography variant="h2" align="center" color="textSecondary" paragraph>
                            Something short and leading about the collection below—its contents, the creator, etc.
                            Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                            entirely.
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary"> Main call to action</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">Secondary action</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="xl">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random"
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">Heading</Typography>
                                        <Typography>This is a media card. You can use this section to describe the content.</Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary" onClick={() => handleClickVacancy()}>View</Button>
                                        <Button size="small" color="primary">Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Home;