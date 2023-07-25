import React from "react";
import { useSelector, useDispatch } from "react-redux";
import gameSlice from "../../redux/gameSlice";

import { Container } from "@mui/material";

function Option({icon, name, classes=''}) {

  const state = useSelector(state => state.game);
  const dispatch = useDispatch();
  const {setPlayerChoice} = gameSlice.actions;

  const handleClick = () => {
    console.log(name);
    dispatch(setPlayerChoice(name))
  };

  return(
    <div className={`option-border ${classes}`} id={name} onClick={handleClick}>
      <Container sx={{width: '75%', height: '75%', borderRadius: '50%', backgroundColor: 'white', boxShadow: 'inset 0 0.35rem #b9c0d3', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <img src={icon} style={{width: '60%'}}/>
      </Container>
    </div>
  )

}

export default Option;