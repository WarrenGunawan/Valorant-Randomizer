import { useState, useRef, useEffect } from 'react';
import '../App.css';

import brimstoneSticker from '/images/brimstone-sticker.png';
import phoenixSticker from '/images/phoenix-sticker.png';

export function TitleCard() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <img className='brimstone-sticker-resize' src={brimstoneSticker} />

            <div style={{ position: 'relative', top: 20, display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontWeight: 'bold', fontSize: 100, margin: 0 }}>VAL ROULETTE</p>
                <p className='text-font' style={{ fontSize: 15, position: 'relative', left: 300, bottom: 35 }}>Randomize your load out each round!</p>
            </div>

            <img className='phoenix-sticker-resize' src={phoenixSticker} />
        </div>
    )
}

export default TitleCard