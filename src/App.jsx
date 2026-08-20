import { useState, useRef, useEffect } from 'react';
import RoundLoadout from './components/RoundLoadout';
import './App.css';

import brimstoneSticker from '/images/brimstone-sticker.png';
import phoenixSticker from '/images/phoenix-sticker.png';



function App() {
    return (
        <div className='main-div'>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <img className='brimstone-sticker-resize' src={brimstoneSticker} />
                <p style={{ fontWeight: 'bold', fontSize: 100, margin: 0 }}>VAL ROULETTE</p>
                <img className='phoenix-sticker-resize' src={phoenixSticker} />
            </div>

            <RoundLoadout/>
        </div>
    )
}


export default App
