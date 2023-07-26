import React from "react";
import { useSelector, useDispatch } from "react-redux";
import gameSlice from "../../redux/gameSlice";

import { Container, Button } from "@mui/material";

function PlayAgain(){

  const state = useSelector(state => state.game);
  const dispatch = useDispatch();
  const {resetChoices} = gameSlice.actions;

  const handleClick = () => {
    dispatch(resetChoices())
  }

  return(
    <Container id='play-again'>
      <h1>
        {
          state.winner === 'player' ?
          'You Win'
          :
          state.winner === 'cpu' ?
          'You Lose'
          :
          state.winner === 'draw' ?
          'Draw'
          :
          null
        }
      </h1>
      <Button id='play-again-button' onClick={handleClick} variant="contained" size="large">
        Play Again
      </Button>
    </Container>
  )

}

export default PlayAgain;