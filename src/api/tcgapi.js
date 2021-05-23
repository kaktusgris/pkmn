import pokemon from 'pokemontcgsdk';
import {randomFromList} from '../utils/random';

pokemon.configure({apiKey: '0c3da295-4ceb-479e-a57a-009f67b646e7'});

let stadiums = [];

const getAllStadiums = () => {
    if (stadiums.length > 0) return Promise.resolve(stadiums);
    return pokemon.card.all( {q: 'subtypes:Stadium'})
        .then(cards => stadiums = cards);
}

export const getRandomStadiumText = (handleReturn) => {
    getAllStadiums()
        .then(result => {
            const rules = randomFromList(result).rules;
            if (rules[0].includes('This card stays in play when you play it')) return handleReturn(rules[1]);;
            return handleReturn(rules[0]);
        })
}