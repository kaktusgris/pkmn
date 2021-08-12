import * as pokeapi from '../../api/pokeapi';

export const getPokemon = () => pokeapi.getRandomPokemon();

export const getManyPokemon = (n) => {
    let promises = [];
    for (let i = 0; i < n; i++) {
        promises.push(pokeapi.getRandomPokemon());
    };
    return Promise.all(promises);
};

const getEvolution = (chain) => {
    const evolution = chain.evolves_to;
    return evolution.length === 0 ? null : evolution[0];
};

const getIdFromChain = (chain) => {
    const splitted = chain.species.url.split('/');
    const id = splitted[splitted.length - 2];
    return id;
};

export const getPokemonLine = (pokemon) => {
    return pokeapi.getPokemonSpecies(pokemon)
        .then(species => {
            return fetch(species.evolution_chain.url);
        })
        .then(res => res.json())
        .then(line => {
            const basic = line.chain;
            const stage1 = getEvolution(basic);
            if (!stage1) return [getIdFromChain(basic)];

            const stage2 = getEvolution(stage1);
            if (!stage2) return [getIdFromChain(basic), getIdFromChain(stage1)];

            return [getIdFromChain(basic), getIdFromChain(stage1), getIdFromChain(stage2)];
        });
};

export const getRandomLineWithspritesOld = () => {
    return getPokemonLine(pokeapi.getRandomPokedexNr())
        .then(response => {
            Promise.all(response.map(p => pokeapi.getPokemon(p)))
                .then(data => data.map(p => ({ dex: p.id, name: p.name, sprite: p.sprites.front_default })));
        });
};

export const getRandomLineWithsprites = () => {
    return pokeapi.getRandomLine()
        .then(data => {
            Promise.all(data.map(p => pokeapi.getPokemon(p)))
                .then(data => data.map(p => ({ dex: p.id, name: p.name, sprite: p.sprites.front_default })));
        });
};

export const getManyPokemonLines = (n) => {
    let promises = [];
    for (let i = 0; i < n; i++) {
        promises.push(getRandomLineWithsprites());
    };
    return Promise.all(promises);
};