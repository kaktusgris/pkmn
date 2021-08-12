import * as random from '../utils/random';

const pokedexMax = 898;
const lineMax = 467;
const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/';
const urlPokemonSpecies = 'https://pokeapi.co/api/v2/pokemon-species/';
const urlEvolution = 'https://pokeapi.co/api/v2/evolution-chain/';

export const getRandomPokedexNr = () => random.randomInterval(pokedexMax);
export const getRandomLineNr = () => random.randomInterval(lineMax);

export const getPokemon = (pokemon) => {
    return fetch(urlPokemon + pokemon)
        .then(res => res.json());
}

export const getRandomPokemon = () => {
    const randomPokemon = getRandomPokedexNr();
    return fetch(urlPokemon + randomPokemon)
        .then(res => res.json())
        .then(data => ({ dex: randomPokemon, name: data.name, image: data.sprites.front_default }));
};

export const getRandomLine = () => {
    const randomLine = getRandomLineNr();
    return fetch(urlEvolution + randomLine)
        .then(res => res.json());
}

export const getPokemonSpecies = (pokemon) => {
    return fetch(urlPokemonSpecies + pokemon)
        .then(res => res.json());
}

export const getEvolution = (id) => {
    return fetch(urlEvolution + id)
        .then(res => res.json());
}