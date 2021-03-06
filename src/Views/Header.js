import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Grid
} from '@material-ui/core';
import { makeStyles, } from '@material-ui/core/styles';
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    topAppBar: {
        Height: "20vh",
        minHeight: "200px"
    },
    toolbar: {
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        alignSelf: 'flex-end',
        verticalAlign: 'middle',
        display: 'inline-flex'
    },
}));

const AppBars = ({ title, logoLink }) => {

    const classes = useStyles();

    return (
        <AppBar position="static" elevation={0} color="default" className={classes.topAppBar}>
            <Toolbar className={classes.toolbar}>
                {title !== undefined &&
                    <Grid container item direction="row" alignItems="center" xs={12} sm={6}>
                        <Grid item style={{marginRight:"5%"}}>
                        <Link to={`/`}>
                            <img src={`https://res.cloudinary.com/dxgllmny2/image/upload/v1603271133/LionIcon_dqetpr.png`} alt="logo" height="70px" />
                        </Link>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.title} variant="h4" noWrap color="primary">
                                {title.toUpperCase()}
                            </Typography>
                        </Grid>
                    </Grid>
                }
            </Toolbar>
        </AppBar>
    );
}

export default AppBars;