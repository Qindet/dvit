import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {isDvitLoadingStatus, selectDvit} from "../redux/selectors/dvit";
import {fetchDvitRequested, fetchDvitLoaded} from "../redux/actions/dvit";
import {useParams} from 'react-router-dom'
import DvitsItem from "./dvits-item";
import CircularProgress from "@material-ui/core/CircularProgress";
import {Avatar, IconButton, Typography} from "@material-ui/core";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import Hidden from "@material-ui/core/Hidden";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ReplyIcon from "@material-ui/icons/Reply";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    avatarItem: {
        width: 50,
        height: 50,
        marginRight: 10
    },
    dvitWrap: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        borderRight: '1px solid rgba(0, 0, 0, 0.12)',
        borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    dvitWrapTop: {
        display: 'flex',
        padding: 10,
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
    mainText: {
        fontSize: 23,
        fontWeight: 400,
        wordBreak: 'break-all',
        lineHeight: 1.3125,
        margin: '10px 0',
    },
    likePanel: {
        padding: '6px 2px 6px 2px',
        borderTop: '1px solid rgba(0, 0, 0, 0.12)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
    },
    infoPanel: {
        margin: '10px 0 10px 0',
        fontSize: 15,
        '& span': {
            marginRight: 5
        }
    }
}))

const FullDvit = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const dvit = useSelector(selectDvit)
    const isDvitLoading = useSelector(isDvitLoadingStatus)
    const params: {id: string} = useParams()
    useEffect(() => {
        if (params.id) {
            dispatch(fetchDvitRequested(params.id))
        }
        return () => {dispatch(fetchDvitLoaded(null))}
    },[])
    if (!dvit || isDvitLoading) {
        return <div style={{textAlign:'center'}}><CircularProgress color="primary" /></div>
    }
    return (

            <div className={classes.dvitWrap}>
                <div className={classes.dvitWrapTop}>
                    <Avatar className={classes.avatarItem} alt="Travis Howard" src="/static/images/avatar/2.jpg"/>
                    <div>
                        <span>Nick Polom</span><br/>
                        <span>@pokelawls</span>
                    </div>
                </div>
                <div style={{padding:'6px 10px'}}>
                    <Typography className={classes.mainText}>
                        {dvit.text}
                    </Typography>
                    <div className={classes.infoPanel}>
                        <span>10:55PM</span><span>&middot;</span><span>21 сент. 2020г.</span>&middot;
                    </div>
                </div>

                <div className={classes.likePanel}>
                    <span style={{fontWeight:600,margin:5}}>62</span>отметки "Нравится"
                </div>
                <div className={classes.dvitWrapBot}>
                    <div>
                        <IconButton color="primary" onClick={() => {alert('clicked')}}>
                            <ChatBubbleIcon/>
                        </IconButton>
                    </div>
                    <div>
                        <IconButton color="primary">
                            <RepeatIcon/>
                        </IconButton>
                    </div>
                    <div>
                        <IconButton color="primary">
                            <FavoriteBorderIcon/>
                        </IconButton>
                    </div>
                    <div>
                        <IconButton color="primary">
                            <ReplyIcon/>
                        </IconButton>
                    </div>
                </div>
            </div>

    );
};

export default FullDvit;