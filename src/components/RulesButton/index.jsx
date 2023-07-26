import React, {useState} from "react";

import { Container, Modal, Box, Button } from "@mui/material";
import rulesIcon from '../../assets/images/image-rules.svg';
import closeIcon from '../../assets/images/icon-close.svg';

function RulesButton() {

  const [showModal, toggleModal] = useState(false);

  const handleToggle = () => {
    toggleModal(!showModal)
  }

  return(
    <>
      <Container id='rules-button' onClick={handleToggle}>
        <p>RULES</p>
      </Container>

      <Modal
        open={showModal}
        onClose={handleToggle}
      >

        <Box id='rules-modal'>
          <h1 id='rules-header'>Rules</h1>
          <img src={rulesIcon} alt="rules of rock-paper-scissors" />
          <Button onClick={handleToggle}>
            <img src={closeIcon} alt="close rules icon" />
          </Button>
        </Box>

      </Modal>
    </>
  )

}

export default RulesButton;