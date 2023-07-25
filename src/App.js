import './styles/App.scss';
import GameScreen from './components/GameScreen';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './redux';

let store = configureStore({
  reducer: gameReducer,
});

function App() {
  return (
    <Provider store={store}>
      <GameScreen />
    </Provider>
  );
}

export default App;
