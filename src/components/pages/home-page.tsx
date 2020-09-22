import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import {Container, Typography, Grid, Paper, TextField, InputAdornment} from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search'
import NavigationPanel from "../navigation-panel"
import DvitCreator from "../dvit-creator"
import MiniProfile from "../mini-profile"
import Hidden from "@material-ui/core/Hidden"
import MiniNavigationPanel from "../mini-navigation-panel"
import CreateIcon from '@material-ui/icons/Create'
import ModalMainContainer from "../../containers/modal-main-container"
import Trends from "../trends";
import { Route } from "react-router-dom";
import Dvits from "../dvits";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from "@material-ui/core/IconButton";
import ArrowButtonBack from "../../UI/arrow-button-back";
import FullDvit from "../full-dvit";


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

    ///////
    rightSidePanel: {
        marginTop: 10,
        marginRight: 20,
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
                    <Grid className={classes.gridWrapper} container spacing={4}>
                        <Hidden xsDown>
                            <Grid className={classes.leftSidePanel} item xs={2}>
                                <NavigationPanel/>
                            </Grid>
                        </Hidden>

                        <Grid className={classes.mainPanel} item lg={7} sm={10} md={7} xs={12}>
                            <Route path={'/home/dvit'} >
                                <Paper style={{paddingBottom:10}} square={true} className={classes.mainPanelTop} variant={"outlined"}>
                                    <Typography style={{fontSize:'19px',fontWeight:600,padding:'10px 0 10px 10px'}}>
                                        <ArrowButtonBack/>
                                        Двитнуть
                                    </Typography>
                                </Paper>
                            </Route>

                            <Route path={['/home', '/home/search']} exact>
                                <Paper square={true} className={classes.mainPanelTop} variant={"outlined"}>
                                    <Typography style={{fontSize:'19px',fontWeight:600,padding:'10px 0 0 10px'}}>Главная</Typography>
                                </Paper>
                                <Hidden xsDown>
                                        <DvitCreator/>
                                </Hidden>
                            </Route>
                            <Route path="/home" exact>
                                <Dvits />
                            </Route>
                            <Route path="/home/dvit/:id" component={FullDvit} exact/>



                        </Grid>
                        <Hidden smDown>
                            <Grid className={classes.rightSidePanel} item lg={2}>
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
                                        <Trends/>
                                    </Paper>
                                    <Paper className={classes.rightSideSuggestions}>
                                        <Typography variant={'h5'}>Кого читать</Typography>
                                        <MiniProfile/>
                                        <MiniProfile/>
                                        <MiniProfile/>
                                    </Paper>
                                </div>
                            </Grid>
                        </Hidden>

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