import React from "react"

import {makeStyles} from "@material-ui/core/styles";
import {Avatar, IconButton, Typography} from "@material-ui/core";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ReplyIcon from "@material-ui/icons/Reply";
import Hidden from "@material-ui/core/Hidden";

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
}))


const Dvit = () => {
    const classes = useStyles()
    return <>
        <div className={classes.dvitItem}>
            <Avatar className={classes.avatarItem} alt="Travis Howard" src="/static/images/avatar/2.jpg"/>
            <div className={classes.dvitWrap}>
                <div className={classes.dvitWrapTop}>
                    <span>Poke</span><span>@pokelawls</span><span>&middot;</span><span>5 ч</span>
                </div>
                <Typography>Just checked my email, the DMCA strike I received on Twitter was from a tweet in 2017
                    Just checked my email, the DMCA strike I received on Twitter was from a tweet in 2017
                    Just checked my email, the DMCA strike I received on Twitter was from a tweet in 2017
                    Just checked my email, the DMCA strike I received on Twitter was from a tweet in 2017

                    Just checked my email, the DMCA strike I received on Twitter was from a tweet in 2017
                    Just checked my email, the DMCA strike I received on Twitter was from a tweet in 2017
                    Just checked my email, the DMCA strike I received on Twitter was from a tweet in 2017
                </Typography>
                <div className={classes.dvitWrapBot}>
                    <div>
                        <IconButton color="primary">
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

export default Dvit