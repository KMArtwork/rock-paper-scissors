import React from "react";

import Box from '@mui/material/Box';
import titleLogo from '../../assets/images/logo.svg'
import Score from "../Score";

function Header() {

  return(
    <Box id='header-box'>
      <img src={titleLogo} id='header-logo' alt='rock paper scissors logo'/>
      <Score />
    </Box>
  )

}

export default Header;