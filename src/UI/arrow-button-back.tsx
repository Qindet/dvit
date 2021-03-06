import React from 'react'
import {useHistory} from 'react-router-dom'
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";


const ArrowButtonBack = () => {
    const {push} = useHistory()
    const clickHandler = () => {
        push('/home')
    }

    return <>
        <IconButton onClick={clickHandler}>
            <ArrowBackIcon color="primary"/>
        </IconButton>
        </>
}

export default ArrowButtonBack