import React from "react"

import {makeStyles} from "@material-ui/core/styles";
import {Avatar, Button} from "@material-ui/core";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const useStyles = makeStyles((theme) => ({

    mainPanelCreateWrap: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        padding: 20,
        '& button': {
            border: '1px solid #fff',
            width: '130px',
            padding: '10px',
            color:'white',
            margin: '10px 5px 0 auto',
        }
    },
    infoSideButton: {
        backgroundColor: 'orange',
        color: '#FFF',
        padding: '10px',
        marginTop: '5px',
        width: 200,
        margin: '0 auto',
        display: 'block',
        '&:hover': {
            backgroundColor: 'orange',
        }
    },
    avatarItem: {
        width: 50,
        height: 50
    },
    progressMain: {
        position: 'relative',
        marginLeft: '20%'
    },
    progressBg: {
       position: 'absolute',
        '& svg': {
           color: 'grey'
        }
    },
    progressBar: {
        position: 'absolute',
        zIndex: 10
    }
}))


const DvitCreator: React.FC = () => {
    const classes = useStyles()
    return <>
                    <Avatar className={classes.avatarItem} alt="Travis Howard" src="/static/images/avatar/2.jpg"/>
                    <div className={classes.mainPanelCreateWrap}>
                        <TextareaAutosize style={{fontSize:18,padding:10,border:'none'}} aria-label="minimum height" rowsMin={3} placeholder="Что происходит" />
                        <Button fullWidth className={classes.infoSideButton}>Двитнуть</Button>
                    </div>
        </>
}

export default DvitCreator