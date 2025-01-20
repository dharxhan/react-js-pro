import React, {useState} from 'react'

const useModal = () => {
    const [open, setOpen] = useState(false);

    function handleOpen(){
        setOpen(!open);
    }

    function handleClose(){
        setOpen(false);
    }
  return {
    open,
    handleOpen,
    handleClose,
}
}

export default useModal