import React, {ReactElement, ReactNode} from "react";
import {Button,  TextField, FormControl} from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        minWidth: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '25px',
        '& h2': {
            marginBottom: '10px'
        }
    },
    infoSideButton: {
        width: '100%',
        color: 'orange',
        padding: '10px',
        marginTop: '5px'
    },
    textField: {
        width: '100%',
        marginBottom: '10px'
    },
    inputLabel: {
        color: 'orange'
    }
}));

interface ModalSignInProps {
    open: boolean
    handleOpen: () => void
    handleClose: () => void
    children: string | ReactNode
}

const ModalSingIn: React.FC<ModalSignInProps> = ({open,handleOpen,handleClose,children}) => {
    const classes = useStyles();

    return <>
        <Button fullWidth color="secondary" className={classes.infoSideButton} onClick={handleOpen}>{children}</Button>

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
                <FormControl className={classes.paper}>
                    <h2 id="transition-modal-title">Войдите в учетную запись</h2>
                    <div>
                        <TextField className={classes.textField}  id="email-field" label="Email" variant="filled" />
                    </div>
                    <div>
                        <TextField className={classes.textField}  id="pass-field" label="Пароль" variant="filled" />
                    </div>
                    <Button color="secondary" className={classes.infoSideButton} onClick={handleOpen}>Войти</Button>
                </FormControl>
            </Fade>
        </Modal>
        </>
}


export default ModalSingIn