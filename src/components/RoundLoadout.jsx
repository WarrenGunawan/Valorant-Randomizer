import { useState, useRef, useEffect } from 'react';
import { AGENTS, ABILITIES, GUNS, SHIELDS } from '../data';
import '../App.css';

import OneCharge from './chargeImages/OneCharge';
import TwoCharge from './chargeImages/TwoCharge';
import ThreeCharge from './chargeImages/ThreeCharge';
import EightCharge from './chargeImages/EightCharge';
import FiveStarCharges from './chargeImages/FiveStarCharges';






function renderCharge(numberOfCharges, randomNumberOfCharges) {
    if (numberOfCharges === 1) return <OneCharge numberOfCharges={randomNumberOfCharges} />;
    if (numberOfCharges === 2) return <TwoCharge numberOfCharges={randomNumberOfCharges} />;
    if (numberOfCharges === 3) return <ThreeCharge numberOfCharges={randomNumberOfCharges} />;
    if (numberOfCharges === 8) return <EightCharge numberOfCharges={randomNumberOfCharges} />;
    return null;
}


export function RoundLoadout({ randomAgentId, credits, rerollTrigger }) {
    const randomAgent = AGENTS.find((agent) => agent.id === randomAgentId) ?? AGENTS.find((agent) => agent.id === 'jett');
    const randomAgentIcon = randomAgent?.icon;
    const randomAgentName = randomAgent?.name;

    const isReyna = randomAgentId === 'reyna';
    const isAstra = randomAgentId === 'astra';


    const spendOrder = ['gun', 'shield', 'c', 'q', 'e'];
    const shuffledSpendOrder = [...spendOrder].sort(() => Math.random() - 0.5);
    let currentCredits = credits;

    // Gun variables
    let randomGun = null;
    let randomGunImage = null;

    // Get Shield
    let randomShield = null;
    let randomShieldImage = null;

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

    const cCost = c?.cost;
    const qCost = q?.cost;
    const eCost = e?.cost;

    const cNumberOfCharges = c?.maxCharges;
    const qNumberOfCharges = q?.maxCharges;
    const eNumberOfCharges = e?.maxCharges;

    // C ability charges
    let cRandomNumberOfCharges = 0;

    // Q ability charges
    let qRandomNumberOfCharges = 0;
    
    // E ability charges
    let eRandomNumberOfCharges = 1;




    let xRandomNumberOfCharges = 1;
    if(isAstra) {
        const x = agentAbilities.find((a) => a.slot === 'x');
        const xNumberOfCharges = 4;
        const xCost = x?.cost;
        
        if(xCost <= currentCredits) {
            const affordableCharges = Math.floor(currentCredits / xCost);
            const maxPossible = Math.min(affordableCharges, xNumberOfCharges);
            const extraRoll = Math.max(maxPossible - 1, 0);
            const extraCharges = Math.floor(Math.random() * (extraRoll + 1));
            xRandomNumberOfCharges += extraCharges;
            currentCredits -= extraCharges * eCost;
        }
    }


    shuffledSpendOrder.forEach((item) => {
        if (item === 'gun') {
            const affordableGuns = GUNS.filter((gun) => gun.cost <= currentCredits);
            const gunIndex = Math.floor(Math.random() * affordableGuns.length);
            randomGun = affordableGuns[gunIndex];
            randomGunImage = randomGun?.image;
            currentCredits -= randomGun?.cost ?? 0;
        } else if (item === 'shield') {
            const affordableShields = SHIELDS.filter((shield) => shield.cost <= currentCredits);
            const shieldIndex = Math.floor(Math.random() * affordableShields.length);
            randomShield = affordableShields[shieldIndex];
            randomShieldImage = randomShield?.image;
            currentCredits -= randomShield?.cost ?? 0;
        } else if (item === 'c') {
            if (!isAstra && cCost <= currentCredits) {
                const affordableCharges = Math.floor(currentCredits / cCost);
                const maxPossible = Math.min(affordableCharges, cNumberOfCharges);
                cRandomNumberOfCharges = Math.floor(Math.random() * (maxPossible + 1));
                currentCredits -= cRandomNumberOfCharges * cCost;
            }
        } else if (item === 'q') {
            if (!isAstra && !isReyna && qCost <= currentCredits) {
                const affordableCharges = Math.floor(currentCredits / qCost);
                const maxPossible = Math.min(affordableCharges, qNumberOfCharges);
                qRandomNumberOfCharges = Math.floor(Math.random() * (maxPossible + 1));
                currentCredits -= qRandomNumberOfCharges * qCost;
            }
        } else if (item === 'e') {
            if (!isAstra && eCost <= currentCredits && eNumberOfCharges != 1) {
                const affordableCharges = Math.floor(currentCredits / eCost);
                const maxPossible = Math.min(affordableCharges, eNumberOfCharges);
                const extraRoll = Math.max(maxPossible - 1, 0);
                const extraCharges = Math.floor(Math.random() * (extraRoll + 1));
                eRandomNumberOfCharges += extraCharges;
                currentCredits -= extraCharges * eCost;
            }
        }
    });

    


    return (
        <div className='round-loadout-div'>
            <img className='agent-icon-resize' src={randomAgentIcon} />

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    {/* C Ability */}
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>
                        <p style={{ fontSize: 11, margin: 0 }}>{cName}</p>
                        <img className='ability-icon-resize' src={cIcon} />
                        {!isAstra && renderCharge(cNumberOfCharges, cRandomNumberOfCharges)}
                    </div>

                    {/* Q + E — grouped together so Reyna's shared meter can sit centered beneath just these two */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            {/* Q Ability */}
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 20, marginLeft: 20 }}>
                                <p style={{ fontSize: 11, margin: 0 }}>{qName}</p>
                                <img className='ability-icon-resize' src={qIcon} />
                                {!isReyna && !isAstra && renderCharge(qNumberOfCharges, qRandomNumberOfCharges)}
                            </div>

                            {/* E Ability */}
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 20 }}>
                                <p style={{ fontSize: 11, margin: 0 }}>{eName}</p>
                                <img className='ability-icon-resize' src={eIcon} />
                                {!isReyna && !isAstra && renderCharge(eNumberOfCharges, eRandomNumberOfCharges)}
                            </div>
                        </div>

                        {/* Reyna: Devour + Dismiss share one soul orb meter */}
                        {isReyna && (
                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}>
                                <TwoCharge numberOfCharges={eRandomNumberOfCharges} />
                            </div>
                        )}
                    </div>
                </div>

                {/* Astra: all three abilities draw from the same 5 stars */}
                {isAstra && (
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}>
                        <FiveStarCharges numberOfCharges={xRandomNumberOfCharges} />
                    </div>
                )}
            </div>

            <div style={{ width: 350, display: 'flex', justifyContent: 'center', marginRight: 20 }}>
                <img className='gun-icon-resize' src={randomGunImage} />
            </div>

            <div className='shield-icon-background'>
                <img className='shield-icon-resize' src={randomShieldImage} />
            </div>
        </div>
    )
}