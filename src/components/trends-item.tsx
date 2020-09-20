import React from "react"
import {ITrend} from "../redux/interfaces/trends-state";
import {Paper} from "@material-ui/core";
import { Link } from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    trendWrapper: {
        padding: 10,
        '& a': {
            color: 'inherit',
            textDecoration: 'none'
        }
    }
}))

const TrendsItem: React.FC<ITrend> = ({name,count}) => {
    const classes = useStyles()
    return <>
        <Paper className={classes.trendWrapper} variant={"outlined"} square>
            <Link to={`/home/search?q=${name}`}>
                <div>{name}</div>
                <div style={{fontSize:12}}>Кол-во: {count}</div>
            </Link>

        </Paper>
    </>
}

export default TrendsItem