import React from "react";

import Box from '@mui/material/Box';
import titleLogo from '../../assets/images/logo.svg'
import Score from "../Score";

function Header() {

  return(
    <Box sx={{border: '3px solid hsl(217, 16%, 45%)', borderRadius: '5px', padding: '1rem', display: 'flex', justifyContent: 
    'space-between', alignItems: 'center', height: '60px'}}>
      <img src={titleLogo} style={{width: 'auto', height: '80%', marginLeft: '0.25rem'}}/>
      <Score />
    </Box>
  )

}

export default Header;