import PlayerList from './players-items/players.controller';
import { PLAYERS } from './players-items/playerInfo';
import { GlobalStyle } from './players-items/playerInfo.view';


const App = () => {
  return (
    <>
      <PlayerList players={PLAYERS}/>
    <GlobalStyle />
    </>
  );
}

export default App;
