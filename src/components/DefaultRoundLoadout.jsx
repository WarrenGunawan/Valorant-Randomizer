import { useState, useRef, useEffect } from 'react';
import { AGENTS, ABILITIES, GUNS, SHIELDS } from '../data';
import '../App.css';

import OneCharge from './chargeImages/OneCharge';
import TwoCharge from './chargeImages/twoCharge';
import ThreeCharge from './chargeImages/ThreeCharge';
import EightCharge from './chargeImages/EightCharge';
import FiveStarCharges from './chargeImages/FiveStarCharges';


function renderCharge(numberOfCharges) {
    if (numberOfCharges === 1) return <OneCharge numberOfCharges={0} />;
    if (numberOfCharges === 2) return <TwoCharge numberOfCharges={0} />;
    if (numberOfCharges === 3) return <ThreeCharge numberOfCharges={0} />;
    if (numberOfCharges === 8) return <EightCharge numberOfCharges={0} />;
    return null;
}


export function DefaultRoundLoadout({ randomAgentId }) {

    const randomAgent = AGENTS.find((agent) => agent.id === randomAgentId) ?? AGENTS.find((agent) => agent.id === 'jett');

    const randomAgentIcon = randomAgent?.icon;
    const randomAgentName = randomAgent?.name;

    const agentAbilities = ABILITIES[randomAgentId] || ABILITIES['jett'];
    const c = agentAbilities.find((a) => a.slot === 'c');
    const q = agentAbilities.find((a) => a.slot === 'q');
    const e = agentAbilities.find((a) => a.slot === 'e');

    const cIcon = c?.image;
    const qIcon = q?.image;
    const eIcon = e?.image;

    const cName = c?.name;
    const qName = q?.name;
    const eName = e?.name;

    const cNumberOfCharges = c?.maxCharges;
    const qNumberOfCharges = q?.maxCharges;
    const eNumberOfCharges = e?.maxCharges;

    const vandal = GUNS[14].image;

    const heavy = SHIELDS[2].image;

    const isReyna = randomAgentId === 'reyna';
    const isAstra = randomAgentId === 'astra';


    return (
        <div className='round-loadout-div'>
            <img className='agent-icon-resize' src={randomAgentIcon} />

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    {/* C Ability */}
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>
                        <p style={{ fontSize: 11, margin: 0 }}>{cName}</p>
                        <img className='ability-icon-resize' src={cIcon} />
                        {/* Reyna's Leer is hardcoded to 2 charges; everyone else uses their actual maxCharges */}
                        {!isAstra && (isReyna ? <TwoCharge numberOfCharges={0} /> : renderCharge(cNumberOfCharges))}
                    </div>

                    {/* Q + E — grouped together so Reyna's shared meter can sit centered beneath just these two */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            {/* Q Ability */}
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 20, marginLeft: 20 }}>
                                <p style={{ fontSize: 11, margin: 0 }}>{qName}</p>
                                <img className='ability-icon-resize' src={qIcon} />
                                {!isReyna && !isAstra && renderCharge(qNumberOfCharges)}
                            </div>

                            {/* E Ability */}
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 20 }}>
                                <p style={{ fontSize: 11, margin: 0 }}>{eName}</p>
                                <img className='ability-icon-resize' src={eIcon} />
                                {!isReyna && !isAstra && renderCharge(eNumberOfCharges)}
                            </div>
                        </div>

                        {/* Reyna: Devour + Dismiss share one soul orb meter */}
                        {isReyna && (
                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}>
                                <TwoCharge numberOfCharges={0} />
                            </div>
                        )}
                    </div>
                </div>

                {/* Astra: all three abilities draw from the same 5 stars */}
                {isAstra && (
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}>
                        <FiveStarCharges numberOfCharges={0} />
                    </div>
                )}
            </div>

            <div style={{ width: 350, display: 'flex', justifyContent: 'center', marginRight: 20 }}>
                <img className='gun-icon-resize' src={vandal} />
            </div>

            <div className='shield-icon-background'>
                <img className='shield-icon-resize' src={heavy} />
            </div>
        </div>
    )
}