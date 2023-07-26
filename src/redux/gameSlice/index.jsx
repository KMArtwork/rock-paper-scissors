import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    playerChoice: undefined,
    cpuChoice: undefined,
    options: ['rock', 'paper', 'scissors'],
    score: 0,
    winner: undefined
  },
  reducers: {
    setPlayerChoice(state, action){
      state.playerChoice = action.payload;
    },
    setCpuChoice(state, action){
      const idx = Math.floor(Math.random() * state.options.length);
      state.cpuChoice = state.options[idx];
    },
    resetChoices(state, action){
      state.playerChoice = undefined;
      state.cpuChoice = undefined;
      state.winner = undefined;
    },
    setScore(state, action){
      if(
        (state.playerChoice === 'rock' && state.cpuChoice === 'scissors')
        ||
        (state.playerChoice === 'paper' && state.cpuChoice === 'rock')
        ||
        (state.playerChoice === 'scissors' && state.cpuChoice === 'paper')
      ){
        console.log('you win')
        state.score = state.score + 1;
        state.winner = 'player';
      }
      else if(
        (state.cpuChoice === 'rock' && state.playerChoice === 'scissors')
        ||
        (state.cpuChoice === 'paper' && state.playerChoice === 'rock')
        ||
        (state.cpuChoice === 'scissors' && state.playerChoice === 'paper')
      ){
        console.log('you lose')
        state.winner = 'cpu';
      } else {
        console.log('draw')
        state.winner = 'draw';
      };
    }
  }
})

export default gameSlice;