import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import ChatIcon from '@material-ui/icons/Chat'
import LanguageIcon from '@material-ui/icons/Language'
import {Typography, Button} from "@material-ui/core"
import ModalMainContainer from "../../containers/modal-main-container"
import { NavLink } from "react-router-dom"
import SpaIcon from "@material-ui/icons/Spa";
import SignInContainer from "../../containers/sign-in-container";


const useStyles = makeStyles({
    pageWrapper: {
        height: '100vh',
        display: 'flex',
        '@media (max-width: 1140px)': {
            flexDirection: 'column'
        }
    },
    infoSide: {
        background: 'orange',
        width: '50%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '@media (max-width: 1140px)': {
            width: '100%'
        }
    },
    infoSideList: {
        padding: '50px'
    },
    infoSideListItem: {
        listStyle: 'none',
        '& h5': {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '10px'
        }
    },
    infoSideText: {

    },
    infoSideIcon: {
        fontSize:  34,
        marginRight: '10px'
    },
    infoSideButton: {
        color: 'orange',
        width: 200,
        '& a': {
            width: '100%',
            padding: '10px'
        },
        padding: '0'
    },
    authSide: {
        width: '50%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        '@media (max-width: 1140px)': {
            width: '100%'
        }
    },
    authSideContent: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& h6': {
            marginBottom: '10px'
        }
    },
    mainLogo: {
        fontSize: '15em'
    }
});

const GreetingPage: React.FC = () => {
    const classes = useStyles()

    return <div className={classes.pageWrapper}>

            <div className={classes.infoSide}>
                <ul className={classes.infoSideList}>
                    <li className={classes.infoSideListItem}>
                        <Typography className={classes.infoSideText} variant="h5">
                            <SearchIcon className={classes.infoSideIcon} /> Читайте самое интересное
                        </Typography>
                    </li>
                    <li className={classes.infoSideListItem}>
                        <Typography className={classes.infoSideText} variant="h5">
                            <ChatIcon className={classes.infoSideIcon} /> Общайтесь и узнавайте новое
                        </Typography>
                        <Typography className={classes.infoSideText} variant="h5">
                            <LanguageIcon className={classes.infoSideIcon} /> Будьте на связи со всем миром
                        </Typography>
                    </li>
                </ul>
            </div>
            <div className={classes.authSide}>
                <div className={classes.authSideContent}>
                    <SpaIcon className={classes.mainLogo} color="primary"/>
                    <Typography variant="h6">
                        Присоединяйтесь к Dvitter!
                    </Typography>
                    <Button className={classes.infoSideButton} style={{backgroundColor: 'orange',color:'white'}}>
                        <NavLink to="/signup" style={{textDecoration: 'none',color:'#fff'}}>Зарегистрироваться</NavLink>
                    </Button>
                    <div>
                        <ModalMainContainer content={<SignInContainer/>}>Войти</ModalMainContainer>
                    </div>
                </div>
            </div>
        </div>
}

export default GreetingPage