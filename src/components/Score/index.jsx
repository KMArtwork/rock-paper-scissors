import React from "react";

import Box from '@mui/material/Box';

import { useSelector } from "react-redux";

function Score(){

  const state = useSelector(state => state.game)

  return(
    <Box id='score-box'>
      <p id="score-header">SCORE</p>
      <h1 id="score-number">{state.score}</h1>
    </Box>
  )

}

export default Score;