import React, { useEffect } from "react";
import Option from "../Option";

import RockIcon from '../../assets/images/icon-rock.svg';
import PaperIcon from '../../assets/images/icon-paper.svg'
import ScissorsIcon from '../../assets/images/icon-scissors.svg'

import { useSelector, useDispatch } from "react-redux";
import gameSlice from "../../redux/gameSlice";

function CompareChoices(){

  const state = useSelector(state => state.game);
  const dispatch = useDispatch();
  const {setPlayerChoice, setCpuChoice, setScore} = gameSlice.actions;
 
  useEffect(() => {
    // console.log('yo')
    dispatch(setCpuChoice());
    dispatch(setScore());
    setTimeout(() => {
      console.log('yo from inside the timeout');
      dispatch(setPlayerChoice(undefined));
    }, 3000)
  }, [])

  return(
    <div id='compare-choices-wrapper'>
      <div id='player-choice'>
          <Option 
            name={state.playerChoice} 
            icon={
              state.playerChoice === 'rock' ?
              RockIcon
              :
              state.playerChoice === 'scissors' ?
              ScissorsIcon
              :
              state.playerChoice === 'paper' ?
              PaperIcon
              :
              null
            }/>
            <p>You Picked</p>
      </div>
      <div id="cpu-choice">
        {
          state.cpuChoice ? 
          <Option 
          name={state.cpuChoice} 
          icon={
            state.cpuChoice === 'rock' ?
            RockIcon
            :
            state.cpuChoice === 'scissors' ?
            ScissorsIcon
            :
            state.cpuChoice === 'paper' ?
            PaperIcon
            :
            null
          }/>
          :
          <div id='cpu-choice-placeholder'></div>
        }
        <p>The House Picked</p>
      </div>
    </div>
  )

}

export default CompareChoices;