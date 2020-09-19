import React, {ReactElement, ReactNode} from "react";
import {Button, TextField, FormControl, IconButton, Paper} from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import {makeStyles} from "@material-ui/core/styles";
import DvitCreator from "./dvit-creator";


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainPanelCreate: {
        minHeight: 120,
        display: 'flex',
        padding: 10,
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
    inputLabel: {
        color: 'orange'
    }
}));

interface ModalMain {
    open: boolean
    handleOpen: () => void
    handleClose: () => void
    children: string | ReactNode
    content: ReactElement
}

const ModalMain: React.FC<ModalMain> = ({open,handleOpen,handleClose,children,content}) => {
    const classes = useStyles();

    return <>
        {typeof children==='string'?
            <Button fullWidth className={classes.infoSideButton} onClick={handleOpen}>{children}</Button>:
            <IconButton onClick={handleOpen} color="primary">
                {children}
            </IconButton>
        }


        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <FormControl>
                    <Paper className={classes.mainPanelCreate} variant={"outlined"}>
                        {content}
                    </Paper>
                </FormControl>
            </Fade>
        </Modal>
        </>
}


export default ModalMain