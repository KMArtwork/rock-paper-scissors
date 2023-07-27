import React, { useEffect, useState } from "react";
import Option from "../Option";
import PlayAgain from "../PlayAgain";

import RockIcon from '../../assets/images/icon-rock.svg';
import PaperIcon from '../../assets/images/icon-paper.svg'
import ScissorsIcon from '../../assets/images/icon-scissors.svg'

import { useSelector, useDispatch } from "react-redux";
import gameSlice from "../../redux/gameSlice";

function CompareChoices(){

  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 500 ? true : false 
  );

  const state = useSelector(state => state.game);
  const dispatch = useDispatch();
  const { setCpuChoice, setScore} = gameSlice.actions;

  const handleResize = () => {
    console.log('window size change')
    window.innerWidth <= 500 ?
    setIsMobile(true)
    :
    setIsMobile(false)
  }
 
  useEffect(() => {
    dispatch(setCpuChoice());
    dispatch(setScore());
    window.addEventListener('resize', handleResize)
  }, []) //eslint-disable-line

  return(
    <>
      <div id='compare-choices-wrapper'>
        <div id='player-choice'>
          <div id={state.winner === 'player' ? 'winner' : ''}>
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
              }
            />
          </div>
            <p>You Picked</p>
        </div>
        { !isMobile ? <PlayAgain /> : null }
        <div id="cpu-choice">
          <div id={state.winner === 'cpu' ? 'winner' : ''}>
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
              }
            />
          </div>
          <p>The House Picked</p>
        </div>
      </div>
      { isMobile ? <PlayAgain /> : null }
    </>
  )

}

export default CompareChoices;