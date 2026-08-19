import { useState, useRef, useEffect } from 'react';
import { AGENTS } from './data';
import './App.css';



function App() {
    return (
        <div className="main-div">
            {AGENTS.map((agent) => (
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <img className="icon-resize" src={agent.icon} alt="agent"/>
                    <text style={{ color: 'white' }}>{agent.name}</text>
                </div>
            ))}
        </div>
    )
}


export default App