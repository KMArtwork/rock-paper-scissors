import { combineReducers } from "@reduxjs/toolkit";
import gameSlice from "./gameSlice";

const gameReducer = combineReducers({
  game: gameSlice.reducer
})

export default gameReducer;