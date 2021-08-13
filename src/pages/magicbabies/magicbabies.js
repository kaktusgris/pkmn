import React, { useState } from 'react';
import { getChallenge, getAllChallenges } from './challenges';
import { getRandomStadiumText } from '../../api/tcgapi';
import './magicbabies.scss';
import Button from '../../common/button';

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

    const addCard = () => {
        getRandomStadiumText((card) => setChallenges([...challenges, card]));
    }

    return (
        <div className='magicbabies card'>
            <h1>Magic babies</h1>
            <div>
                <Button title='New Challenge' onClick={() => addChallenge(1)} />
                <Button title='3 Challenges' onClick={() => addChallenge(3)} />
                <Button title='Show All' onClick={addAllChallenges} />
            </div>
            <div>
                <Button title='Stadium' onClick={addCard} />
                <Button title='Clear' onClick={clearChallenges} disabled={challenges.length === 0} />
            </div>
            <ul>
                {challenges.map(c => (
                    <li key={c}>{c}</li>
                ))}
            </ul>
        </div>);
}

export default MagicBabies;