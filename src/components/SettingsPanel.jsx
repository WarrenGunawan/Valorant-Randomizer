import { useState, useRef, useEffect } from 'react';
import { ROLES, AGENTS } from '../data';
import '../App.css'


const roles = [
    { id: 'duelist', name: 'Duelist' },
    { id: 'initiator', name: 'Initiator' },
    { id: 'controller', name: 'Controller' },
    { id: 'sentinel', name: 'Sentinel' },
]

export function SettingsPanel({ buttonsSelected, setButtonsSelected, randomAgentId, setRandomAgentId, gameStarted, setGameStarted, randomizeAgent, isRandomizing }) {
    function toggleRole(id) {
        if (isRandomizing) return;

        const count = Object.values(buttonsSelected).filter((value) => value === true).length;
        const isCurrentlySelected = buttonsSelected[id];

        if (isCurrentlySelected && count <= 1) {
            return;
        }

        setButtonsSelected((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    }

    const startGame = (e) => {
        setGameStarted(true)
    }




    return (
        <div className='randomizer-settings-div' style={{ opacity: isRandomizing ? 0.5 : 1, pointerEvents: isRandomizing ? 'none' : 'auto' }}>
            <p className='text-font' style={{ fontSize: 15, margin: 0, paddingRight: 20, paddingLeft: 20, paddingTop: 10, paddingBottom: 10 }}>Select the roles you want randomized to start the game!</p>

            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {roles.map((role) => (
                    <button className={buttonsSelected[role.id] ? 'role-button' : 'role-button-selected'} key={role.id} onClick={() => toggleRole(role.id)} disabled={isRandomizing}>
                        <img className='role-icon-resize' style={buttonsSelected[role.id] ? { opacity: 1 } : { opacity: 0.5 }}
                            src={ROLES.find((r) => r.id === role.id).icon} />
                    </button>
                ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {randomAgentId !== null && (
                    <div>
                         <button className='randomize-agent-button' onClick={startGame} disabled={isRandomizing}>
                            <p className='text-font' style={{ fontSize: 20, margin: 0, padding: 20 }}>Start</p>
                        </button>
                    </div>
                )}

                <button className='randomize-agent-button' onClick={randomizeAgent} disabled={isRandomizing}>
                    <p className='text-font' style={{ fontSize: 20, margin: 0, padding: 20 }}>Randomize Loadout</p>
                </button>
            </div>  
        </div>
    )
}