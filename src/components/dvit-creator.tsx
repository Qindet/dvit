import React from "react"

import {makeStyles} from "@material-ui/core/styles";
import {Avatar, Button, Paper, TextField} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    mainPanelCreate: {
        height: 120,
        display: 'flex',
        padding: 10
    },
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
    avatarItem: {
        width: 50,
        height: 50
    },
}))


const DvitCreator = () => {
    const classes = useStyles()
    return <>
                <Paper className={classes.mainPanelCreate} variant={"outlined"}>
                    <Avatar className={classes.avatarItem} alt="Travis Howard" src="/static/images/avatar/2.jpg"/>
                    <div className={classes.mainPanelCreateWrap}>
                        <TextField id="standard-basic"  placeholder="Что происходит" variant={"standard"}/>
                        <Button variant="contained"  color="primary">Двитнуть</Button>
                    </div>
                </Paper>
        </>
}

export default DvitCreator