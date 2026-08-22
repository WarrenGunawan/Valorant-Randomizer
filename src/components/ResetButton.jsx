import { useState } from 'react';
import { ArrowLeftToLine } from 'lucide-react';


export function ResetButton({ gameStarted, setGameStarted, randomAgentId, setRandomAgentId }) {

    function ReturnToMainMenu() {
        if(gameStarted) {
            setGameStarted(false)
        }

        setRandomAgentId(null)
    }

    return (
        <div style={{ position: 'absolute', top: 20, left: 20 }}>
            <button onClick={ReturnToMainMenu} className='randomize-agent-button-inverted' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                <ArrowLeftToLine size={25} strokeWidth={2} color='#0081ae' />
                <p className='text-font-inverted' style={{ fontSize: 16, marginLeft: 5, marginRight: 0, marginTop: 0, marginBottom: 0 }}>Return to Main Menu</p>
            </button>
        </div>
    )
}