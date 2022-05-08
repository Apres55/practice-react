import React, {useEffect, useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import PlayerList from './players-items/players.controller';
import PlayerInfo from './players-items/playerInfo';
import { PLAYERS } from './players-items/playerInfo';
import { GlobalStyle } from './players-items/playerInfo.view';


const App = () => {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='players'>
                <Route path='' element={<PlayerList players={PLAYERS}/>} />
                <Route path=':id' element={<PlayerInfo />} />
            </Route>
          </Routes>
        </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
