import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import ChatIcon from '@material-ui/icons/Chat'
import {Typography, Button, Modal} from "@material-ui/core"
import ModalSignInContainer from "../../../container/modal-sign-in-container";

const useStyles = makeStyles({
    pageWrapper: {
        height: '100vh',
        display: 'flex'
    },
    infoSide: {
        background: 'orange',
        width: '50%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoSideList: {
        padding: '50px'
    },
    infoSideListItem: {
        listStyle: 'none',
        '& h4': {
            display: 'flex',
            alignItems: 'center',
        }
    },
    infoSideText: {

    },
    infoSideIcon: {
        fontSize:  34,
        marginRight: '10px'
    },
    infoSideButton: {
        width: '100%',
        color: 'orange'
    },
    authSide: {
        width: '50%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    authSideContent: {
        width: '50%',
    }

});

const GreetingPage = ({}) => {
    const classes = useStyles()

    return <div className={classes.pageWrapper}>

            <div className={classes.infoSide}>
                <ul className={classes.infoSideList}>
                    <li className={classes.infoSideListItem}>
                        <Typography className={classes.infoSideText} variant="h4">
                            <SearchIcon className={classes.infoSideIcon} /> Hello
                        </Typography>
                    </li>
                    <li className={classes.infoSideListItem}>
                        <Typography className={classes.infoSideText} variant="h4">
                            <ChatIcon className={classes.infoSideIcon} /> Hello
                        </Typography>
                    </li>
                </ul>
            </div>
            <div className={classes.authSide}>
                <div className={classes.authSideContent}>
                    <Typography variant="h6">
                        Text
                    </Typography>
                    <Button className={classes.infoSideButton} style={{backgroundColor: 'orange',color:'white'}}>Sign Up</Button>
                    <ModalSignInContainer/>
                </div>
            </div>
        </div>
}

export default GreetingPage