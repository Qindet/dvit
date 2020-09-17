import React from 'react'
import ModalSingIn from "../components/modal-sign-in";


const ModalSignInContainer: React.FC = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <ModalSingIn open={open} handleOpen={handleOpen} handleClose={handleClose}/>
        </div>
    );
}

export default ModalSignInContainer