import React from "react"

import {makeStyles} from "@material-ui/core/styles";
import {Avatar, IconButton, Typography} from "@material-ui/core";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ReplyIcon from "@material-ui/icons/Reply";
import Hidden from "@material-ui/core/Hidden";
import {IDvit} from "../redux/interfaces/dvits-state";
import { Link,useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    avatarItem: {
        width: 50,
        height: 50
    },
    dvitItem: {
        display: 'flex',
        padding: 10,
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        overflow: 'auto',
        '&:hover': {
            backgroundColor: '#FFDAB9',
            cursor: 'pointer',
            transition: 'background-color .7s'
        }
    },
    dvitWrap: {
        display: 'flex',
        flexDirection: 'column',
        margin: 5
    },
    dvitWrapTop: {
        display: 'flex',
        '& span': {
            display: 'inline-block',
            marginRight: 5
        }
    },
    dvitWrapBot: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '90%',
        '& span': {
            cursor: 'pointer',
            fontSize: 14,
            display: 'inline-block',
        }
    },
    dvitLink: {
        textDecoration: 'none',
        color: 'inherit'
    }
}))



const DvitsItem: React.FC<IDvit> = ({_id,text,user}) => {
    const classes = useStyles()
    const {push}=useHistory()
    const clickDvitHandler = () => {
        push(`/home/dvit/${_id}`)
    }
    return <>
            <div className={classes.dvitItem} onClick={clickDvitHandler}>
                <Avatar className={classes.avatarItem} alt="Travis Howard" src="/static/images/avatar/2.jpg"/>
                <div className={classes.dvitWrap}>
                    <div className={classes.dvitWrapTop}>
                       <span>@pokelawls</span><span>&middot;</span><span>5 ч</span>
                    </div>
                    <Typography>
                        {text}
                    </Typography>
                    <div className={classes.dvitWrapBot}>
                        <div>
                            <IconButton color="primary" onClick={(e) => {e.stopPropagation();alert('clicked')}}>
                                <ChatBubbleIcon/>
                            </IconButton>
                            <Hidden xsDown>
                                <span>1</span>
                            </Hidden>
                        </div>
                        <div>
                            <IconButton color="primary">
                                <RepeatIcon/>
                            </IconButton>
                            <Hidden xsDown>
                                <span>1</span>
                            </Hidden>

                        </div>
                        <div>
                            <IconButton color="primary">
                                <FavoriteBorderIcon/>
                            </IconButton>
                            <Hidden xsDown>
                                <span>1</span>
                            </Hidden>
                        </div>
                        <div>
                            <IconButton color="primary">
                                <ReplyIcon/>
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
    </>
}

export default DvitsItem