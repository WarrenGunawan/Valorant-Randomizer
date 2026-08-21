import { useState, useRef, useEffect } from 'react';
import { ROLES, AGENTS } from '../data';
import '../App.css'


const roles = [
    { id: 'duelist', name: 'Duelist' },
    { id: 'initiator', name: 'Initiator' },
    { id: 'controller', name: 'Controller' },
    { id: 'sentinel', name: 'Sentinel' },
]

export function SettingsPanel({ setRandomAgentId, gameStarted, setGameStarted }) {
    const [ buttonsSelected, setButtonsSelected ] = useState(
        Object.fromEntries(roles.map((role) => [role.id, true]))
    )

    function toggleRole(id) {
        const count = Object.values(buttonsSelected).filter((value) => value === true).length
        const isCurrentlySelected = buttonsSelected[id]

        if(isCurrentlySelected && count <= 1) {
            return
        }

        setButtonsSelected((prev) => ({
            ...prev,
            [id]: !prev[id]
        }))
    }

    function randomizeAgent() {
        const selectedRoles = Object.entries(buttonsSelected)
            .filter(([roleId, isSelected]) => isSelected)
            .map(([roleId]) => roleId);

        const eligibleAgents = AGENTS.filter((agent) => selectedRoles.includes(agent.role));

        const randomIndex = Math.floor(Math.random() * eligibleAgents.length);
        const chosenAgent = eligibleAgents[randomIndex];

        setRandomAgentId(chosenAgent.id);
    }




    return (
        <div className='randomizer-settings-div'>
            <p className='text-font' style={{ fontSize: 15, margin: 0, paddingRight: 20, paddingLeft: 20, paddingTop: 10, paddingBottom: 10 }}>Select the roles you want randomized to start the game!</p>

            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {roles.map((role) => (
                    <button className={buttonsSelected[role.id] ? 'role-button' : 'role-button-selected'} key={role.id} onClick={(() => toggleRole(role.id))}>
                        <img className='role-icon-resize' style={buttonsSelected[role.id] ? { opacity: 1 } : { opacity: 0.5 }} 
                            src={ROLES.find((r) => r.id === role.id).icon} />
                    </button>
                ))}
            </div>

            <button className='randomize-agent-button' onClick={() => (randomizeAgent())}>
                <p className='text-font' style={{ fontSize: 20, margin: 0, padding: 20 }}>Randomize Loadout</p>
            </button>
        </div>
    )
}