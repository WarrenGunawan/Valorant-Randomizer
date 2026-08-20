import { useState, useRef, useEffect } from 'react';
import { AGENTS, ABILITIES, GUNS, SHIELDS } from '../data';
import '../App.css';


function RoundLoadout() {

    const randomAgentIcon = AGENTS[0].icon;
    const randomAgentName = AGENTS[0].name;
    const randomAgentId = AGENTS[0].id;

    const c = ABILITIES.jett[0].image;
    const q = ABILITIES.jett[1].image;
    const e = ABILITIES.jett[2].image;

    const vandal = GUNS[13].image;

    const heavy = SHIELDS[2].image;



    return (
        <div className="round-Loadout-Div">
            <img className='agent-icon-resize' src={randomAgentIcon} />
            <img className='ability-icon-resize' src={c} />
            <img className='ability-icon-resize' src={q} />
            <img className='ability-icon-resize' src={e} />
            <img className='gun-icon-resize' src={vandal}/>
            <img className='shield-icon-resize' src={heavy} />
        </div>
    )
}

export default RoundLoadout