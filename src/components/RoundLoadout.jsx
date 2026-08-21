import { useState, useRef, useEffect } from 'react';
import { AGENTS, ABILITIES, GUNS, SHIELDS } from '../data';
import '../App.css';

import OneCharge from './chargeImages/OneCharge';
import TwoCharge from './chargeImages/twoCharge';


export function RoundLoadout({ randomAgentId }) {

    const randomAgentIcon = AGENTS.find((agent) => agent.id === randomAgentId).icon;
    const randomAgentName = AGENTS[0].name;

    const c = ABILITIES.jett[0].image;
    const q = ABILITIES.jett[1].image;
    const e = ABILITIES.jett[2].image;

    const melee = GUNS[0].image;
    const classic = GUNS[1].image;
    const vandal = GUNS[14].image;

    const heavy = SHIELDS[2].image;



    return (
        <div className='round-loadout-div'>
            <img className='agent-icon-resize' src={randomAgentIcon} />


            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {/* C Ability */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>
                    <p style={{ fontSize: 11, margin: 0 }}>Cloud Burst</p>
                    <img className='ability-icon-resize' src={c} />
                    <OneCharge numberOfCharges={0} />
                </div>

                {/* Q Ability */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 20, marginLeft: 20 }}>
                    <p style={{ fontSize: 11, margin: 0 }}>Updraft</p>
                    <img className='ability-icon-resize' src={q} />
                    <TwoCharge numberOfCharges={1} />
                </div>

                {/* E Ability */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 20 }}>
                    <p style={{ fontSize: 11, margin: 0 }}>Tailwind</p>
                    <img className='ability-icon-resize' src={e} />
                    <OneCharge numberOfCharges={1} />
                </div>
            </div>


            <div style={{ width: 275, display: 'flex', justifyContent: 'center', marginRight: 20 }}>
                <img className='gun-icon-resize' src={vandal} />
            </div>

            <div className='shield-icon-background'>
                <img className='shield-icon-resize' src={heavy} />
            </div>
        </div>
    )
}