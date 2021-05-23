import * as random from '../utils/random';

const pokedexMax = 898;
const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/';

export const getRandomPokemon = (handlePokemon) => {
    const randomPokemon = random.randomInterval(pokedexMax);
    console.log('Henter pokemon ' + randomPokemon + '/' + pokedexMax);
    fetch(urlPokemon + randomPokemon)
        .then(res => res.json())
        .then(data => {
            handlePokemon(data.name, data.sprites.front_default);
        });
};

export const getRandomPokemonDirectly = () => {
    const randomPokemon = random.randomInterval(pokedexMax);
    console.log('Henter pokemon ' + randomPokemon + '/' + pokedexMax);
    return fetch(urlPokemon + randomPokemon)
        .then(res => res.json())
        .then(data => ({pokemon: data.name, image: data.sprites.front_default}));
}