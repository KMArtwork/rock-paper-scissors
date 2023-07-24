import React, {useState} from "react";

import Header from "../Header";

import PlayerChoices from "../PlayerChoices";
import RulesButton from "../RulesButton";

function GameScreen() {

  const [playerChoice, setPlayerChoice] = useState(null);
  const [aiChoice, setAiChoice] = useState(null);
  const [score, setPlayerScore] = useState(0);

  return(
    <div id='gamescreen'>
      <Header />
      <PlayerChoices />
      <RulesButton />
    </div>
  )

}

export default GameScreen;