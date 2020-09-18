import React from "react"
import SpaIcon from "@material-ui/icons/Spa";
import {NavLink} from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import {Button, Typography} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import SubjectIcon from "@material-ui/icons/Subject";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import {makeStyles} from "@material-ui/core/styles";
import CreateIcon from '@material-ui/icons/Create';
import Hidden from "@material-ui/core/Hidden";
import ModalSignInContainer from "../containers/modal-sign-in-container";
const useStyles = makeStyles((theme) => ({

    gridWrapper: {
        height: '100vh'
    },
    leftSidePanel: {
        marginTop: '15px',
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
    logoItem: {
        marginBottom: 40
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

const NavigationPanel = () => {
    const classes = useStyles()

    return <>
        <ul className={classes.leftSideList}>
            <li className={classes.logoItem}><SpaIcon fontSize="large" color="primary"/></li>
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
            <li className={classes.leftSideListItem}>
                    {/*<CreateIcon className={classes.iconItem} fontSize="large" color="primary"/>*/}
                    <Hidden mdDown>
                        <ModalSignInContainer>Двитнуть</ModalSignInContainer>
                    </Hidden>
                    <Hidden lgUp>
                        <div style={{marginLeft:-15}}>
                            <ModalSignInContainer>
                                <CreateIcon className={classes.iconItem} fontSize="large" color="primary"/>
                            </ModalSignInContainer>
                        </div>


                    </Hidden>
                    {/*<Typography className={classes.textItem}>Двитнуть</Typography>*/}
            </li>
        </ul>
        </>
}

export default NavigationPanel