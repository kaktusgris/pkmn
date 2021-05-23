import React, { useState } from 'react';
import { getRandomLineWithsprites, getManyPokemonLines } from './pokemons';
import { randomLetters } from '../../utils/random';
import { capitalise } from '../../utils/utils';
import './wizard.scss';
import Spinner from '../../common/spinner';

const numberOfPokemon = 6;
const numberOfLetters = 3;

const WizardChallenge = () => {

    const [loading, setLoading] = useState(false);
    const [pokemonTeam, setPokemonTeam] = useState(null); // [{dex, name, sprite}, {dex, name, sprite}]
    const [letters, setLetters] = useState('');

    const finishedTeam = (team) => {
        setPokemonTeam(team);
        setLoading(false);
    }

    const generateChallenge = () => {
        setPokemonTeam(null);
        setLoading(true);

        getManyPokemonLines(6)
            .then(finishedTeam);
        setLetters(randomLetters(numberOfLetters));
    }

    const replacePokemonAtIndex = (line, index) => {
        let team = [...pokemonTeam];
        team[index] = line;
        setPokemonTeam(team);
    }

    const PokemonLine = ({ basic, stage1, stage2, index }) => {
        if (!basic) return null;
        const name = stage2 ? stage2.name : stage1 ? stage1.name : basic.name;
        return (
            <div className='pokemonline'>
                <div className='pokemonline-name' onClick={() => getRandomLineWithsprites().then(line => replacePokemonAtIndex(line, index))}>
                    {capitalise(name)}
                </div>
                <img src={basic.sprite} alt={basic.name} />
                {stage1 && <img src={stage1.sprite} alt={stage1.name} />}
                {stage2 && <img src={stage2.sprite} alt={stage2.name} />}
            </div>
        );
    }

    return (
        <div className='wizard card'>
            <h1>Wizard Challenge</h1>
            <div className='buttons m-2'>
                <div className='generate-button btn btn-primary m-1' onClick={generateChallenge}> Generate </div>
            </div>
            <hr />
            {letters && !loading && <h2>{letters}</h2>}
            {loading && <Spinner />}
            <div className='column'>
                {pokemonTeam?.map((line, i) => (
                    <PokemonLine basic={line[0]} stage1={line[1]} stage2={line[2]} index={i} />
                ))}
            </div>
        </div>
    );
}

export default WizardChallenge;