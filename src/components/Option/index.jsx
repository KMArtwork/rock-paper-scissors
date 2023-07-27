import React from "react";
import { useDispatch } from "react-redux";
import gameSlice from "../../redux/gameSlice";

import { Container } from "@mui/material";

function Option({icon, name, classes=''}) {
  const dispatch = useDispatch();
  const {setPlayerChoice} = gameSlice.actions;

  const handleClick = () => {
    dispatch(setPlayerChoice(name))
  };

  return(
    <div className={`option-border ${classes}`} id={name} onClick={handleClick}>
      <Container className="inner-option">
        <img src={icon} style={{width: '60%'}} alt={`${name} icon`}/>
      </Container>
    </div>
  )

}

export default Option;