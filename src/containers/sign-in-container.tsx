import React from "react"
import { TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
    textField: {
        width: '100%',
        marginBottom: '10px'
    },
    wrap: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%'
    }
}));

const SignInContainer:React.FC = () => {
    const classes = useStyles();

    return <div className={classes.wrap}>
            <h2 id="transition-modal-title">Войдите в учетную запись</h2>
            <div>
                <TextField className={classes.textField}  id="email-field" label="Email" variant="filled" />
            </div>
            <div>
                <TextField className={classes.textField}  id="pass-field" label="Пароль" variant="filled" />
            </div>
            <Button color="secondary" className={classes.infoSideButton}>Войти</Button>
        </div>
}

export default SignInContainer