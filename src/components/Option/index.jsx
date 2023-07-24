import React from "react";

import { Container } from "@mui/material";

function Option({icon, color, name}) {

  return(
    <div className="option-border" id={name}>
      <Container sx={{width: '75%', height: '75%', borderRadius: '50%', backgroundColor: 'white', boxShadow: 'inset 0 0.35rem #b9c0d3', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <img src={icon} style={{width: '60%'}}/>
      </Container>
    </div>
  )

}

export default Option;