import React, {useState, useEffect} from "react";

import { Container, Modal, Box, Button } from "@mui/material";
import rulesIcon from '../../assets/images/image-rules.svg';
import closeIcon from '../../assets/images/icon-close.svg';

function RulesButton() {

  const [showModal, toggleModal] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 500 ? true : false 
  );

  const handleToggle = () => {
    toggleModal(!showModal)
  }

  const handleResize = () => {
    console.log('window size change')
    window.innerWidth <= 500 ?
    setIsMobile(true)
    :
    setIsMobile(false)
  }
 
  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, []) //eslint-disable-line

  return(
    <>
      <Container id='rules-button' onClick={handleToggle}>
        <p>RULES</p>
      </Container>

      <Modal
        open={showModal}
        onClose={handleToggle}
        id='rules-modal-wrapper'
      >

        <Box id='rules-modal'>
          <div id='rules-header'>
            <h1 id='rules-header-title'>Rules</h1>
            {
              !isMobile ? 
              <Button onClick={handleToggle}>
                <img src={closeIcon} alt="close rules icon" />
              </Button>
              :
              null
            }
          </div>
            <img src={rulesIcon} alt="rules of rock-paper-scissors" />
          {
            isMobile ? 
            <Button onClick={handleToggle}>
              <img src={closeIcon} alt="close rules icon" />
            </Button>
            :
            null
          }
        </Box>

      </Modal>
    </>
  )

}

export default RulesButton;