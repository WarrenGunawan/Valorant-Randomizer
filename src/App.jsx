import { useState, useRef, useEffect } from 'react';
import { TitleCard, RoundLoadout, DefaultRoundLoadout, SettingsPanel, RerollPanel } from './components';
import { AGENTS } from './data';
import './App.css';

const roles = [
    { id: 'duelist', name: 'Duelist' },
    { id: 'initiator', name: 'Initiator' },
    { id: 'controller', name: 'Controller' },
    { id: 'sentinel', name: 'Sentinel' },
];

function App() {
    const [gameStarted, setGameStarted] = useState(false);
    const [randomAgentId, setRandomAgentId] = useState(null);
    const [buttonsSelected, setButtonsSelected] = useState(
        Object.fromEntries(roles.map((role) => [role.id, true]))
    );

    const [isRandomizing, setIsRandomizing] = useState(false);
    const intervalRef = useRef(null);

    function pickRandomAgent() {
        const selectedRoles = Object.entries(buttonsSelected)
            .filter(([roleId, isSelected]) => isSelected)
            .map(([roleId]) => roleId);

        const eligibleAgents = AGENTS.filter((agent) => selectedRoles.includes(agent.role));
        const randomIndex = Math.floor(Math.random() * eligibleAgents.length);
        return eligibleAgents[randomIndex];
    }

    function randomizeAgent() {
        if (isRandomizing) return;
        setIsRandomizing(true);

        intervalRef.current = setInterval(() => {
            const agent = pickRandomAgent();
            setRandomAgentId(agent.id);
        }, 100);

        setTimeout(() => {
            clearInterval(intervalRef.current);
            const finalAgent = pickRandomAgent();
            setRandomAgentId(finalAgent.id);
            setIsRandomizing(false);
        }, 2000);
    }

    useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, []);


    // Used to calculate valid buys
    const [credits, setCredits] = useState(800);
    const [rerollTrigger, setRerollTrigger] = useState(0);

    function nextRound(newCredits) {
        setCredits(Number(newCredits));
        setRerollTrigger((prev) => prev + 1);
    }


    // Add messahe after first game



    return (
        <div className='main-div'>
            <TitleCard/>
            {gameStarted ? (
                <>
                    <RoundLoadout randomAgentId={randomAgentId} credits={credits} rerollTrigger={rerollTrigger}/>
                    <RerollPanel randomAgentId={randomAgentId} nextRound={nextRound}/>
                </>
            ) : (
                <>
                    <DefaultRoundLoadout randomAgentId={randomAgentId} />
                    <SettingsPanel
                        buttonsSelected={buttonsSelected}
                        setButtonsSelected={setButtonsSelected}
                        randomAgentId={randomAgentId}
                        setRandomAgentId={setRandomAgentId}
                        gameStarted={gameStarted}
                        setGameStarted={setGameStarted}
                        randomizeAgent={randomizeAgent}
                        isRandomizing={isRandomizing}
                    />
                </>
            )}
        </div>
    )
}

export default App