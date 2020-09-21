import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {isDvitLoadingStatus, selectDvit} from "../redux/selectors/dvit";
import {fetchDvitRequested, fetchDvitLoaded} from "../redux/actions/dvit";
import {useParams} from 'react-router-dom'
import DvitsItem from "./dvits-item";
import CircularProgress from "@material-ui/core/CircularProgress";

const FullDvit = () => {
    const dispatch = useDispatch()
    const dvit = useSelector(selectDvit)
    const isDvitLoading = useSelector(isDvitLoadingStatus)
    const params: {id: string} = useParams()
    useEffect(() => {
        if (params.id) {
            dispatch(fetchDvitRequested(params.id))
        }
        return () => {dispatch(fetchDvitLoaded(null))}
    },[])
    if (!dvit || isDvitLoading) {
        return <div style={{textAlign:'center'}}><CircularProgress color="primary" /></div>
    }
    return (
        <div>
            <DvitsItem {...dvit} key={dvit._id}/>
        </div>
    );
};

export default FullDvit;