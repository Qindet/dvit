import React from "react"

import {makeStyles} from "@material-ui/core/styles"
import {Avatar, Paper} from "@material-ui/core"
import IconButton from "@material-ui/core/IconButton";
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const useStyles = makeStyles((theme) => ({
    avatarItem: {
        width: 50,
        height: 50
    },
    rightSideSugItem: {
        display: 'flex',
        justifyContent: 'center',
        padding: 10,
        '& button': {
            padding: '2px 6px',
            height: '35px',
            marginTop: '5px',
            fontSize: '12px',
            color: '#fff'
        }
    },
    rightSideSugItemText: {
        margin: '0 15px'
    }
}))


const MiniProfile:React.FC = () => {
    const classes = useStyles()
    return <>
        <Paper className={classes.rightSideSugItem} variant={"outlined"} square>
            <Avatar className={classes.avatarItem} alt="Travis Howard" src="/static/images/avatar/2.jpg"/>
            <div className={classes.rightSideSugItemText}>
                Esfand <br/>
                @Esfand
            </div>
            <IconButton style={{marginTop:15}}>
                <PersonAddIcon color="primary"/>
            </IconButton>
        </Paper>
    </>
}

export default MiniProfile