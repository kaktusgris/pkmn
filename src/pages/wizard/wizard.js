import React, { useState } from 'react';
import { getRandomLineWithsprites, getManyPokemonLines } from './pokemons';
import { randomLetters } from '../../utils/random';
import { capitalise } from '../../utils/utils';
import './wizard.scss';
import Spinner from '../../common/spinner';
import Settings from './settings';
import Button from '../../common/button';

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
    }

    const PokemonLine = ({ basic, stage1, stage2, index }) => {
        if (!basic) return null;
        const name = stage2 ? stage2.name : stage1 ? stage1.name : basic.name;
        return (
            <div className='pokemonline'>
                <div className='pokemonline-name' onClick={() => {
                    setLoading(true);
                    getRandomLineWithsprites()
                        .then(line => {
                            replacePokemonAtIndex(line, index);
                            setLoading(false);
                        })
                }}>
                    {capitalise(name)}
                </div>
                <img src={basic.sprite} alt={basic.name} />
                {stage1 && <img src={stage1.sprite} alt={stage1.name} />}
                {stage2 && <img src={stage2.sprite} alt={stage2.name} />}
            </div>
        );
    };

    return (
        <div className='wizard card'>
            <div className='d-flex'>
                <h1 className='title'>Wizard Challenge</h1>
                <img className='settings m-1' src='images/gear.png' onClick={() => setShowSettings(!showSettings)} />
            </div>
            {showSettings && <Settings pokemons={numberOfPokemon} letters={numberOfLetters} updatePokemons={setNumberOfPokemon} updateLetters={setNumberOfLetters} />}
            <div className='buttons m-2'>
                <Button className='generate-button' onClick={generateChallenge} title='Generate' />
            </div>
            <hr />
            {letters && !loading && <h2>{letters}</h2>}
            {loading && <Spinner />}
            {pokemonTeam && <div className='column'>
                {pokemonTeam.map((line, i) => (
                    <PokemonLine basic={line[0]} stage1={line[1]} stage2={line[2]} index={i} key={'pokemonline-' + i} />
                ))}
            </div>}
        </div>
    );
}

export default WizardChallenge;