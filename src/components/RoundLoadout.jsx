import { useState, useRef, useEffect } from 'react';
import { AGENTS, ABILITIES, GUNS, SHIELDS } from '../data';
import '../App.css';


export function RoundLoadout() {

    const randomAgentIcon = AGENTS[0].icon;
    const randomAgentName = AGENTS[0].name;
    const randomAgentId = AGENTS[0].id;

    const c = ABILITIES.jett[0].image;
    const q = ABILITIES.jett[1].image;
    const e = ABILITIES.jett[2].image;

    const melee = GUNS[0].image;
    const classic = GUNS[1].image;
    const vandal = GUNS[14].image;

    const heavy = SHIELDS[2].image;



    return (
        <div className="round-loadout-div">
            <img className='agent-icon-resize' src={randomAgentIcon} />
            <img className='ability-icon-resize' src={c} />
            <img className='ability-icon-resize' src={q} />
            <img className='ability-icon-resize' src={e} />
            <div style={{ width: 275, display: 'flex', justifyContent: 'center' }}>
                <img className='gun-icon-resize' src={vandal} />
            </div>
            <img className='shield-icon-resize' src={heavy} />
        </div>
    )
}