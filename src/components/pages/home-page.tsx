import React from "react"
import {makeStyles} from "@material-ui/core/styles";
import {Container, Typography, Grid, Paper, TextField, InputAdornment} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import NavigationPanel from "../navigation-panel";
import DvitCreator from "../dvit-creator";
import Dvit from "../dvit";
import MiniProfile from "../mini-profile";
import Hidden from "@material-ui/core/Hidden";
import MiniNavigationPanel from "../mini-navigation-panel";
import CreateIcon from '@material-ui/icons/Create';
import ModalMainContainer from "../../containers/modal-main-container";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    gridWrapper: {
        height: '100vh'
    },
    leftSidePanel: {
        marginTop: '15px',
        minWidth: 50,
        '@media (max-width: 1140px)': {
            flexBasis: '5%'
        },
    },
///////////
    mainPanel: {
    },
    mainPanelTop: {
        height: 50,
    },
    dvits: {
        marginTop: 20
    },
    avatarItem: {
        width: 50,
        height: 50
    },
    mainPanelCreate: {
        minHeight: 120,
        display: 'flex',
        padding: 10
    },
    ///////
    rightSidePanel: {
        marginTop: 10,
        marginRight: 20,
        '@media (max-width: 1100px)': {
            display: 'none'
        }
    },
    rightSideWrap: {
        position: 'fixed',
        width: '280px',
        '& input': {
            paddingTop: 10,
            paddingBottom: 10,

        },
        '& svg': {
            paddingBottom: 15
        }
    },
    rightSideSearch: {
        borderRadius: '40%',
        width: '100%',
    },
    rightSideNew: {
        marginTop: 20,
        '& h5': {
            padding: 10,
        }
    },
    rightSideNewItem: {
      padding: 10
    },
    rightSideSuggestions: {
        marginTop: 10,
        '& h5': {
            padding: 10
        }
    },
    modalMain: {
        position: 'fixed',
        right: 10,
        bottom: 70,
        backgroundColor: 'orange',
        borderRadius: '45%'
    }
    }))

const HomePage: React.FC = () => {
    const classes = useStyles()
    return <Container maxWidth="lg">
                <Typography component="div" style={{ backgroundColor: '#fff', height: '100vh' }}>
                    <Grid className={classes.gridWrapper} container spacing={3}>
                        <Hidden xsDown>
                            <Grid className={classes.leftSidePanel} item xs={2}>
                                <NavigationPanel/>
                            </Grid>
                        </Hidden>

                        <Grid className={classes.mainPanel} item xs>
                            <Paper square={true} className={classes.mainPanelTop} variant={"outlined"}>
                                <Typography style={{fontSize:'19px',fontWeight:600,padding:'10px 0 0 10px'}}>Главная</Typography>
                            </Paper>
                            <Hidden xsDown>
                                <Paper className={classes.mainPanelCreate} variant={"outlined"}>
                                    <DvitCreator/>
                                </Paper>
                            </Hidden>

                            <Paper className={classes.dvits} variant={"outlined"}>
                                <Dvit/>
                                <Dvit/>
                                <Dvit/>
                            </Paper>
                        </Grid>
                        <Grid className={classes.rightSidePanel} item xs={3}>
                            <div className={classes.rightSideWrap}>
                                <TextField
                                    variant="filled"
                                    id="standard-start-adornment"
                                    size="medium"
                                    className={classes.rightSideSearch}
                                    placeholder="Поиск в Dvitter"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
                                    }}
                                />
                                <Paper className={classes.rightSideNew} variant={"outlined"}>
                                    <Typography variant={'h5'}>Что нового?</Typography>
                                    <Paper className={classes.rightSideNewItem} variant={"outlined"} square>
                                        James
                                    </Paper>
                                    <Paper className={classes.rightSideNewItem} variant={"outlined"} square>
                                        James
                                    </Paper>
                                    <Paper className={classes.rightSideNewItem} variant={"outlined"} square>
                                        James
                                    </Paper>
                                </Paper>
                                <Paper className={classes.rightSideSuggestions}>
                                    <Typography variant={'h5'}>Кого читать</Typography>
                                    <MiniProfile/>
                                    <MiniProfile/>
                                    <MiniProfile/>
                                </Paper>
                            </div>
                        </Grid>
                        <Hidden smUp>
                            <MiniNavigationPanel/>
                        </Hidden>
                        <Hidden smUp>
                            <div className={classes.modalMain}>
                                <ModalMainContainer content={<DvitCreator/>}>
                                    <CreateIcon style={{fontSize:54}}  color="secondary"/>
                                </ModalMainContainer>
                            </div>

                        </Hidden>
                    </Grid>
                </Typography>
            </Container>
}

export default HomePage