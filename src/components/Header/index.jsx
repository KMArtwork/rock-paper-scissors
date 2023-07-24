import React from "react";

import Box from '@mui/material/Box';
import titleLogo from '../../assets/images/logo.svg'
import Score from "../Score";

function Header() {

  return(
    <Box sx={{border: '1px solid white', borderRadius: '5px', padding: '1rem', display: 'flex', justifyContent: 
    'space-between', alignItems: 'center'}}>
      <img src={titleLogo} style={{width: 'auto', height: '60%'}}/>
      <Score />
    </Box>
  )

}

export default Header;