import React, {useEffect} from 'react';
import { Typography} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import {useDispatch, useSelector} from "react-redux";
import {isTrendsLoadingStatus, selectTrends} from "../redux/selectors/trends";
import {fetchTrendsRequested} from "../redux/actions/trends";
import TrendsItem from './trends-item';

const Trends = () => {
    const dispatch = useDispatch()
    const trends = useSelector(selectTrends)
    const isTrendsLoading = useSelector(isTrendsLoadingStatus)

    useEffect(() => {
        dispatch(fetchTrendsRequested())
    },[])
    return <>
        <Typography variant={'h5'}>Что нового?</Typography>
        {isTrendsLoading? <div style={{textAlign:'center'}}><CircularProgress color="primary" /></div> :
            trends.map(trend => (
                <TrendsItem {...trend} key={trend._id}/>
            ))}
        </>
}

export default Trends;