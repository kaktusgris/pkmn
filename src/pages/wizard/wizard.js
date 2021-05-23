import React, { useState } from 'react';
import { getManyPokemon, getPokemon } from './pokemons';
import { randomLetters } from '../../utils/random';
import './wizard.scss';
import Spinner from '../../common/spinner';

const numberOfPokemon = 6;
const numberOfLetters = 3;

const WizardChallenge = () => {

    const [loading, setLoading] = useState(false);
    const [pokemonTeam, setPokemonTeam] = useState([{}]);
    const [letters, setLetters] = useState('');

    const finishedTeam = (team) => {
        setPokemonTeam(team);
        setLoading(false);
    }

    const generateChallenge = () => {
        setPokemonTeam([{}]);
        setLoading(true);
        getManyPokemon(numberOfPokemon, finishedTeam);
        setLetters(randomLetters(numberOfLetters));
    }

    const replacePokemonAtIndex = (pokemon, image, index) => {
        let team = [...pokemonTeam];
        team[index] = {pokemon, image};
        setPokemonTeam(team);
    }

    const Pokemon = ({ pokemon, image, index }) => {
        return (
            <div key={"pokemon-" + index} className='d-flex flex-row'>
                <div className='pokemon-name p-2' onClick={() => getPokemon((p, i) => replacePokemonAtIndex(p, i, index))}>
                    {pokemon} <img src={image} alt={pokemon}/>
                </div>
            </div>
        )
    }

    return (
        <div className='wizard card'>
            <h1>Wizard Challenge</h1>
            <p>
                Regler for wizard challenge...
            </p>
            <div className='buttons'>
                <div className='generate-button btn btn-primary m-1' onClick={generateChallenge}> Generate </div>
            </div>
            {letters && ! loading && <h2>Letters: {letters}</h2>}
            {loading && <Spinner/>}
            <div className='column'>
                {pokemonTeam.map((p, i) => (<Pokemon pokemon={p.pokemon} image={p.image} index={i} />))}
            </div>
        </div>
    );
}

export default WizardChallenge;