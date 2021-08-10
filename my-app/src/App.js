import { useState } from 'react';

import './App.css';
import Modal from './components/Modal/Modal'
import Game from './components/Game/Game'


function App() {

    console.log('render app')

    const [gameStatus, setGameStatus] = useState(false)

    const [playerName1, setPlayerName1] = useState(null)
    const [playerName2, setPlayerName2] = useState(null)

    const getPlayerNames = (p1, p2) => {
        console.log('p1',p1)
        console.log('p2',p2)

        setPlayerName1(p1)
        setPlayerName2(p2)
        setGameStatus(true)        
        
    }



    return (
    <div className="App">
        {!gameStatus?<Modal getPlayerNames={getPlayerNames} />:''}
        <Game playerName1={playerName1} playerName2={playerName2} />
    </div>
  );
}


export default App;
