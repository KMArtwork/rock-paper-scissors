import React from "react";

import Header from "../Header";
import PlayerChoices from "../PlayerChoices";
import RulesButton from "../RulesButton";

import { useSelector } from "react-redux";
import CompareChoices from "../CompareChoices";

function GameScreen() {

  const state = useSelector(state => state.game);
  
  return(
    <div id='gamescreen'>
      <Header />
      {
        !state.playerChoice ?
        <PlayerChoices />
        :
        <CompareChoices /> 
      }
      <RulesButton />
    </div>
  )

}

export default GameScreen;