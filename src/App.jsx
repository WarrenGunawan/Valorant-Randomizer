import { useState, useRef, useEffect } from 'react';
import { TitleCard, RoundLoadout, DefaultRoundLoadout, SettingsPanel } from './components';
import './App.css';



function App() {
    const [ gameStarted, setGameStarted ] = useState(false)
    const [ randomAgentId, setRandomAgentId ] = useState(null);

    return (
        <div className='main-div'>
            <TitleCard/>
            {gameStarted ? (
                <RoundLoadout randomAgentId={randomAgentId} />
            ) : (
                <DefaultRoundLoadout randomAgentId={randomAgentId} />
            )}
            <SettingsPanel setRandomAgentId={setRandomAgentId} gameStarted={gameStarted} setGameStarted={setGameStarted}/>
        </div>
    )
}


export default App
