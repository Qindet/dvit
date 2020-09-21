import React, {useState} from "react"

import {makeStyles} from "@material-ui/core/styles";
import {Avatar, Button, Paper} from "@material-ui/core";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import {useDispatch, useSelector} from "react-redux";
import {addDvitRequested} from "../redux/actions/dvits";
import Alert from '@material-ui/lab/Alert'
import CircularProgress from '@material-ui/core/CircularProgress'
import {selectIsAddDvitHasError, selectIsAddDvitLoadingStatus} from "../redux/selectors/dvits";


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
        },
        '& textarea': {
            resize: 'none'
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
    },
    mainPanelCreate: {
        minHeight: 120,
        display: 'flex',
        padding: 10
    },
}))


const DvitCreator: React.FC = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const hasError = useSelector(selectIsAddDvitHasError)
    const isAddDvitLoading = useSelector(selectIsAddDvitLoadingStatus)
    const [text,setText] = useState('')
    const changeTextArea = (e:React.FormEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            setText(e.currentTarget.value)
        }
    }
    const clickHandler = () => {
        if (text.trim()) {
            dispatch(addDvitRequested(text))
        }
        setText('')
    }
    return <>
        {hasError && <Alert severity="error">Что-то пошло не так, но не беспокойтесь — давайте попробуем еще раз.
        </Alert>}

        <Paper className={classes.mainPanelCreate} variant={"outlined"}>

            <Avatar className={classes.avatarItem} alt="Travis Howard" src="/static/images/avatar/2.jpg"/>
                    <div className={classes.mainPanelCreateWrap}>
                        <TextareaAutosize onChange={changeTextArea} value={text} style={{fontSize:18,padding:10,border:'none'}} aria-label="minimum height" rowsMin={3} placeholder="Что происходит" />
                        <Button onClick={clickHandler} fullWidth disabled={!text.length}
                                className={classes.infoSideButton}>
                            {isAddDvitLoading? <CircularProgress size={21} color="secondary"/>: 'Двитнуть'}
                        </Button>

                    </div>
        </Paper>
        </>
}

export default DvitCreator