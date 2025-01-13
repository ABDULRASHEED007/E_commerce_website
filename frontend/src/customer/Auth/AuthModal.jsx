import React from 'react'
// import { Box, Modal, Typography} from "@mui/material";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Register from './Register';
import {  useLocation } from 'react-router-dom';
import Login from './Login';
import { Backdrop, Fade } from '@mui/material';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    outline:"none",
    boxShadow: 24,
    p: 4,
  };
const AuthModal = ({handleClose, open}) => {

  const location = useLocation();


  return (
    <div>
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >


        <Fade in={open}>

          <Box sx={style}>

          {location.pathname === "/login" ? <Login /> : <Register /> }


          </Box>
        </Fade>
      </Modal>
    </div>
  )
}

export default AuthModal