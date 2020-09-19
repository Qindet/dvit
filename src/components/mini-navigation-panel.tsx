import React from "react"
import {NavLink} from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MailOutlineIcon from '@material-ui/icons/MailOutline';

export const useStyles = makeStyles((theme) => ({

    gridWrapper: {
        height: '100vh'
    },
    mainWrapper: {
        position: 'fixed',
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: '#000',
        display: 'flex',
    },
    NavItem: {
        display: 'block',
        alignItems: 'center',
        width: '100%',
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
            '& svg': {
                margin: '0 auto'
            }
        },
    },


}))

const MiniNavigationPanel = () => {
    const classes = useStyles()

    return <>
        <ul className={classes.mainWrapper}>
            <li className={classes.NavItem}>
                <NavLink to="/">
                    <HomeIcon  fontSize="large" color="primary"/>
                </NavLink>
            </li>
            <li className={classes.NavItem}>
                <NavLink to="/">
                    <SearchIcon fontSize="large" color="primary"/>
                </NavLink>
            </li>
            <li className={classes.NavItem}>
                <NavLink to="/">
                    <NotificationsNoneIcon fontSize="large" color="primary"/>
                </NavLink>
            </li>
            <li className={classes.NavItem}>
                <NavLink to="/">
                    <MailOutlineIcon fontSize="large" color="primary"/>
                </NavLink>
            </li>

        </ul>
    </>
}

export default MiniNavigationPanel