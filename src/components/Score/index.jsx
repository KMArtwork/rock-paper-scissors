import React from "react";

import Box from '@mui/material/Box';

import { useSelector, useDispatch } from "react-redux";

function Score(){

  const state = useSelector(state => state.game)

  return(
    <Box sx={{backgroundColor: 'white', width: '80px', height: '80px', borderRadius: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <p style={{fontWeight: '600', color: 'navy', fontSize: '0.75rem'}}>SCORE</p>
      <h1 style={{fontSize: '2.5rem', fontWeight: '600', color: 'grey'}}>{state.score}</h1>
    </Box>
  )

}

export default Score;