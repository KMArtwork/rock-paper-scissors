import React, {useState} from "react";

import Header from "../Header";
import PlayerChoices from "../PlayerChoices";
import RulesButton from "../RulesButton";

import { useSelector, useDispatch } from "react-redux";
import gameSlice from "../../redux/gameSlice";
import CompareChoices from "../CompareChoices";

function GameScreen() {

  const state = useSelector(state => state.game);
  

  const [playerChoice, setPlayerChoice] = useState(null);
  const [aiChoice, setAiChoice] = useState(null);
  const [score, setPlayerScore] = useState(0);

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