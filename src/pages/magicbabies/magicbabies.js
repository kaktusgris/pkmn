import React, { useState } from 'react';
import {getChallenge, getAllChallenges} from './challenges';


const MagicBabies = () => {
    const [challenges, setChallenges] = useState([]);

    const addChallenge = (number) => {
        let newChallenges = [];
        for (let i = 0; i < number; i++) {
            newChallenges.push(getChallenge());
        }
        setChallenges([...challenges, ...newChallenges]);
    }
    
    const addAllChallenges = () => {
        setChallenges(getAllChallenges());
    }
    
    const clearChallenges = () => {
        setChallenges([]);
    }

    const clearClass = challenges.length === 0 ? 'btn btn-secondary m-1 disabled' : 'btn btn-secondary m-1';

    return (
        <div>
            <h1>Magic babies</h1>
            <div>
                <div className='btn btn-secondary m-1' onClick={() => addChallenge(1)}> New Challenge </div>
                <div className='btn btn-secondary m-1'  onClick={() => addChallenge(3)}> 3 Challenges </div>
                <div className='btn btn-secondary m-1' onClick={addAllChallenges}> Show All </div>
                <div className={clearClass}  onClick={clearChallenges}> Clear </div>
            </div>
            <ul>
                {challenges.map(c => (
                    <li key={c}>{c}</li>
                ))}
            </ul>
        </div>);
}

export default MagicBabies;