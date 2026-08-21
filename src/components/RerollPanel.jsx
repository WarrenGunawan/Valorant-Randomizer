import { useState, useRef, useEffect } from 'react';



export function RerollPanel({ randomAgentId, nextRound }) {
    const [ roundCredits, setRoundCredits ] = useState('');

    const handleChange = (e) => {
        setRoundCredits(e.target.value);
    };

    function moveToNextRound() {
        if ((roundCredits % 100 != 0) || roundCredits < 0 || roundCredits > 9000) {
            return;
        }

        nextRound(roundCredits);
        setRoundCredits('');
    }

    return (
        <div className='reroll-settings-div'>
            <p className='text-font' style={{ fontSize: 15, margin: 0, paddingRight: 20, paddingLeft: 20, paddingTop: 10, paddingBottom: 10 }}>
                Update your credits each round to get your new loadout!
            </p>

            <input className='credit-input-box' id='user-input' type='text' placeholder='Enter Credits...' value={roundCredits} onChange={handleChange} />
            <button className='randomize-agent-button' onClick={moveToNextRound}>
                <p className='text-font' style={{ fontSize: 20, margin: 0, padding: 20 }}>Next Round</p>
            </button>
        </div>
    )
}