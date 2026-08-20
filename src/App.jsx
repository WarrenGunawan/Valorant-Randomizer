import { useState, useRef, useEffect } from 'react';
import { TitleCard, RoundLoadout, SettingsPanel } from './components';
import './App.css';



function App() {
    return (
        <div className='main-div'>
            <TitleCard/>
            <SettingsPanel/>
            <RoundLoadout/>
        </div>
    )
}


export default App
