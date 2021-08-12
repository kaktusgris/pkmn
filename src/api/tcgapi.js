import pokemon from 'pokemontcgsdk';
import { randomFromList } from '../utils/random';

pokemon.configure({ apiKey: '0c3da295-4ceb-479e-a57a-009f67b646e7' });

let stadiums = [];

const getAllStadiums = () => {
    if (stadiums.length > 0) return Promise.resolve(stadiums);
    return pokemon.card.all({ q: 'subtypes:Stadium' })
        .then(cards => stadiums = cards);
}

const queryExpStartingWith = (type, letter) => `subtypes:${type} name:${letter}* legalities.expanded:Legal -rarity:Secret -rarity:Ultra -rarity:Rainbow`;

export const getRandomStadiumText = () => {
    getAllStadiums()
        .then(result => {
            const rules = randomFromList(result).rules;
            if (rules[0].includes('This card stays in play when you play it')) return rules[1];
            return rules[0];
        })
}

export const getSupportersStartingWith = (letter) => {
    return pokemon.card.all({ q: queryExpStartingWith('Supporter', letter) })
        .then(supporters => supporters.filter(s => s.name.charAt(0) === letter))
        .then(removeDuplicateNames);
}

export const getItemsStartingWith = (letter) => {
    return pokemon.card.all({ q: queryExpStartingWith('Item', letter) })
        .then(items => items.filter(i => i.name.charAt(0) === letter))
        .then(removeDuplicateNames);
}

export const getStadiumsStartingWith = (letter) => {
    return pokemon.card.all({ q: queryExpStartingWith('Stadium', letter) })
        .then(stadiums => stadiums.filter(s => s.name.charAt(0) === letter))
        .then(removeDuplicateNames);
}

export const getSpecialEnergiesStartingWith = (letter) => {
    return pokemon.card.all({ q: queryExpStartingWith('Special', letter) })
        .then(energies => energies.filter(e => e.name.charAt(0) === letter))
        .then(removeDuplicateNames);
}

export const getSupportersStartingWithOneOf = (letters) => {
    return Promise.all(letters.split('').map(letter => getSupportersStartingWith(letter)));
}

export const getItemsStartingWithOneOf = (letters) => {
    return Promise.all(letters.split('').map(letter => getItemsStartingWith(letter)));
}

export const getStadiumsStartingWithOneOf = (letters) => {
    return Promise.all(letters.split('').map(letter => getStadiumsStartingWith(letter)));
}

export const getSpecialEnergiesStartingWithOneOf = (letters) => {
    return Promise.all(letters.split('').map(letter => getSpecialEnergiesStartingWith(letter)));
}

const removeDuplicateNames = (cards) => {
    return cards.filter((v,i,a)=>a.findIndex(t=>(t.name === v.name))===i);
}