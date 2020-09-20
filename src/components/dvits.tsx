import React, {useEffect} from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";
import DvitsItem from "./dvits-item";
import {useDispatch, useSelector} from "react-redux";
import {isDvitsLoadingStatus, selectDvits} from "../redux/selectors/dvits";
import {fetchDvitsRequested} from "../redux/actions/dvits";

const Dvits = () => {
    const dispatch = useDispatch()
    const dvits = useSelector(selectDvits)
    const isDvitsLoading = useSelector(isDvitsLoadingStatus)

    useEffect(() => {
        dispatch(fetchDvitsRequested())
    },[])
    return <>
            {isDvitsLoading? <div style={{textAlign:'center'}}><CircularProgress color="primary" /></div> :
                dvits.map(dvit => (
                    <DvitsItem {...dvit} key={dvit._id}/>
                ))}
        </>
}

export default Dvits