import React from "react"
import {makeStyles} from "@material-ui/core/styles";
import {Container, Typography, Grid, Paper} from "@material-ui/core";
import SpaIcon from '@material-ui/icons/Spa'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import SubjectIcon from '@material-ui/icons/Subject';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import {NavLink} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    gridWrapper: {
        height: '100vh'
    },
    leftSidePanel: {
        marginTop: '5px',
        '@media (max-width: 1140px)': {
            flexBasis: '5%'
        },
    },
    leftSideList: {
        listStyle: 'none',
        position: 'fixed',
        maxWidth: '200px',
        '@media (max-width: 1140px)': {
            maxWidth: 22
        },
    },
    leftSideListItem: {
        display: 'inline-flex',
        alignItems: 'center',
        width: '100%',
        marginBottom: 25,

        '& a': {
            width: '100%',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            borderRadius: '10%',
            padding: 10,
            paddingLeft: 0,
            '&:hover': {
                backgroundColor: '#FFDEAD'
            },
        },
    },
    iconItem: {
      fontSize: 32
    },
    textItem: {
        fontSize: 19,
        marginLeft: 15,
        fontWeight: 600,
        display: 'inline-block',
        color: 'black',
        '@media (max-width: 1140px)': {
            display: 'none'
        }
    }
    }))

const HomePage = () => {
    const classes = useStyles()
    return <Container maxWidth="lg">
                <Typography component="div" style={{ backgroundColor: '#fff', height: '100vh' }}>

                    <Grid className={classes.gridWrapper} container spacing={2}>
                        <Grid className={classes.leftSidePanel} item xs={2}>
                            <ul className={classes.leftSideList}>
                                <li><SpaIcon fontSize="large" color="primary"/></li>
                                <li className={classes.leftSideListItem}>
                                    <NavLink to="/">
                                            <HomeIcon className={classes.iconItem}  fontSize="large" color="primary"/>
                                            <Typography className={classes.textItem}>Главная</Typography>
                                    </NavLink>
                                </li>
                                <li className={classes.leftSideListItem}>
                                    <NavLink to="/">
                                        <SearchIcon className={classes.iconItem} fontSize="large" color="primary"/>
                                        <Typography className={classes.textItem}>Поиск</Typography>
                                    </NavLink>
                                </li>
                                <li className={classes.leftSideListItem}>
                                    <NavLink to="/">
                                        <HomeIcon className={classes.iconItem} fontSize="large" color="primary"/>
                                        <Typography className={classes.textItem}>Уведомления</Typography>
                                    </NavLink>
                                </li>
                                <li className={classes.leftSideListItem}>
                                    <NavLink to="/">
                                        <NotificationsNoneIcon className={classes.iconItem} fontSize="large" color="primary"/>
                                        <Typography className={classes.textItem}>Сообщения</Typography>
                                    </NavLink>
                                </li>
                                <li className={classes.leftSideListItem}>
                                    <NavLink to="/">
                                        <BookmarkBorderIcon className={classes.iconItem} fontSize="large" color="primary"/>
                                        <Typography className={classes.textItem}>Закладки</Typography>
                                    </NavLink>
                                </li>
                                <li className={classes.leftSideListItem}>
                                    <NavLink to="/">
                                        <SubjectIcon className={classes.iconItem} fontSize="large" color="primary"/>
                                        <Typography className={classes.textItem}>Списки</Typography>
                                    </NavLink>
                                </li>
                                <li className={classes.leftSideListItem}>
                                    <NavLink to="/">
                                        <PersonOutlineIcon className={classes.iconItem} fontSize="large" color="primary"/>
                                        <Typography className={classes.textItem}>Профиль</Typography>
                                    </NavLink>
                                </li>
                            </ul>

                        </Grid>
                        <Grid item xs={7}>
                            <Paper>xs=6</Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper >xs=6</Paper>
                        </Grid>

                    </Grid>
                </Typography>
            </Container>
}

export default HomePage