import React from "react"
import { makeStyles} from "@material-ui/core/styles";
import {Button, FormControl, TextField, Typography} from "@material-ui/core";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    formWrapper: {
        maxWidth: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        margin: '0 auto',
        paddingTop: '10%',
        '& h4': {
            marginBottom: '20px'
        }
    },
    textField: {
        width: '100%',
        marginBottom: '10px'
    },
    signUpButton: {
        border: '1px solid #fff',
            width: '100%',
            padding: '10px',
        backgroundColor: 'orange',
        color:'white',
        marginBottom: '10px',
        '& a': {
                width: '100%',
                padding: '10px'
        }
        }
}))
const SignUpPage: React.FC = () => {
    const classes = useStyles()
    return (
        <div>
            <div style={{backgroundColor: 'orange',height:'100vh'}}>
                <FormControl className={classes.formWrapper}>
                    <Typography variant="h4">Создайте учетную запись</Typography>
                    <TextField color="secondary"  className={classes.textField}  id="name-field" label="Имя" variant="filled" />
                    <TextField color="secondary"  type="email" className={classes.textField}  id="email-field" label="Email" variant="filled" />
                    <TextField color="secondary"  type="password" className={classes.textField}  id="pass-field" label="Пароль" variant="filled" />
                    <TextField color="secondary"  helperText="Дата рождения. Данная информация будет конфиденциальна." type="date" className={classes.textField}  id="date-field" variant="filled" />
                    <Button className={classes.signUpButton}>
                        Зарегистрироваться
                    </Button>
                    <Button className={classes.signUpButton} style={{padding:'0'}}>
                        <NavLink to="/" style={{textDecoration: 'none',color:'#fff'}}>Вернуться назад</NavLink>
                    </Button>
                </FormControl>
            </div>
        </div>

    )
}

export default SignUpPage