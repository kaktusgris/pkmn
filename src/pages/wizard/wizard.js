import React, { useState } from 'react';
import { getRandomLineWithsprites, getManyPokemonLines } from './pokemons';
import { randomLetters } from '../../utils/random';
import { capitalise } from '../../utils/utils';
import './wizard.scss';
import Spinner from '../../common/spinner';
import Settings from './settings';
import Letters from './letters';

const WizardChallenge = () => {
    const [numberOfPokemon, setNumberOfPokemon] = useState(6);
    const [numberOfLetters, setNumberOfLetters] = useState(3);
    const [pokemonTeam, setPokemonTeam] = useState(null); // [{dex, name, sprite}, {dex, name, sprite}]
    const [letters, setLetters] = useState('');
    const [showSettings, setShowSettings] = useState(false);
    const [loading, setLoading] = useState(false);

    const finishedTeam = (team) => {
        setPokemonTeam(team);
        setLoading(false);
    }

    const generateChallenge = () => {
        setPokemonTeam(null);
        setLoading(true);

        getManyPokemonLines(numberOfPokemon)
            .then(finishedTeam);
        setLetters(randomLetters(numberOfLetters));
    }

    const replacePokemonAtIndex = (line, index) => {
        let team = [...pokemonTeam];
        team[index] = line;
        setPokemonTeam(team);
    };

    const replaceLetters = () => setLetters(randomLetters(numberOfLetters))

    const PokemonLine = ({ basic, stage1, stage2, index }) => {
        if (!basic) return null;
        const name = stage2 ? stage2.name : stage1 ? stage1.name : basic.name;
        const dex = stage2 ? stage2.dex : stage1 ? stage1.dex : basic.dex;
        return (
            <div className='pokemon-line'>
                <div className='pokemonline-name' onClick={() => getRandomLineWithsprites().then(line => replacePokemonAtIndex(line, index))}>
                    {'#' + dex + ' ' + capitalise(name)}
                </div>
                <div className='sprites'>
                    <img className='' src={basic.sprite} alt={basic.name} />
                    {stage1 ? <img className='' src={stage1.sprite} alt={stage1.name} /> : <img className='placeholer-sprite' />}
                    {stage2 ? <img className='' src={stage2.sprite} alt={stage2.name} /> : <img className='placeholer-sprite' />}
                </div>
            </div>
        );
    };

    return (
        <div className='wizard'>
            <div className='content'>
                <div className='d-flex'>
                    <h1 className='title'>Wizard Challenge</h1>
                    <img className='settings m-1' src='images/gear.png' onClick={() => setShowSettings(!showSettings)} />
                </div>
            {showSettings && <Settings pokemons={numberOfPokemon} letters={numberOfLetters} updatePokemons={setNumberOfPokemon} updateLetters={setNumberOfLetters} />}
            <div className='buttons m-2'>
                <div className='generate-button btn btn-primary m-1' onClick={generateChallenge}> Generate </div>
            </div>
            </div>
            {loading && <Spinner />}
            {pokemonTeam && <div className='d-flex flex-wrap content'>
                {pokemonTeam.map((line, i) => (
                    <PokemonLine basic={line[0]} stage1={line[1]} stage2={line[2]} index={i} key={'pokemonline-' + i} />
                ))}
            </div>}
            {letters && !loading && <Letters letters={letters} handleLetterClick={replaceLetters} />}
        </div>
    );
}

export default WizardChallenge;