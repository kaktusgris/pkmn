import * as pokeapi from '../../api/pokeapi';


export const getPokemon = (handlePokemon) => {
    pokeapi.getRandomPokemon(handlePokemon)
}

export const getManyPokemon = (n, handlePokemon) => {
    let promises = [];
    for (let i = 0; i < n; i++) {
        promises.push(pokeapi.getRandomPokemonDirectly());
    };
    Promise.all(promises)
        .then(p => handlePokemon(p));
};