import React from "react";

import Box from '@mui/material/Box';

import { useSelector, useDispatch } from "react-redux";

function Score(){

  const state = useSelector(state => state.game)

  return(
    <Box sx={{backgroundColor: 'white', width: '80px', height: '70px', borderRadius: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <p style={{fontWeight: '700', color: 'hsl(229, 64%, 46%)', fontSize: '0.6rem', letterSpacing: '0.0625rem'}}>SCORE</p>
      <h1 style={{fontSize: '2.5rem', fontWeight: '600', color: 'grey'}}>{state.score}</h1>
    </Box>
  )

}

export default Score;