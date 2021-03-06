import React, {ReactElement, ReactNode} from 'react'
import ModalMain from '../components/modal-main';

interface ModalMainContainerProps {
    children: string | ReactNode
    content: ReactElement
}


const ModalMainContainer: React.FC<ModalMainContainerProps> = ({children,
                                                              content}) => {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div>
            <ModalMain content={content} children={children} open={open} handleOpen={handleOpen} handleClose={handleClose}/>
        </div>
    );
}

export default ModalMainContainer