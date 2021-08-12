import React, { useState } from 'react';
import {isPositiveInteger} from '../../utils/utils';
import './wizard.scss';

const SettingInput = ({ text, value, handleChange, errorMessage }) => (
    <div className='setting-input'>
        <div className='input-group m-1'>
            <div className='input-group-prepend'>
                <span className='input-group-text'>
                    {text}
                </span>
            </div>
            <input
                className='form-control'
                type='number'
                inputMode='numeric'
                pattern='[0-9]*'
                value={value}
                onChange={e => handleChange(e.target.value)}
            />
        </div>
        {errorMessage && <div className='error-message'>
            {errorMessage}
        </div>}
    </div>
);

const Settings = ({ pokemons, letters, updatePokemons, updateLetters }) => {
    const [lettersError, setLettersError] = useState(null);
    const [pokemonsError, setPokemonsError] = useState(null);

    return (
        <div className='wizard-settings'>
            <hr />
            <div className='inputs d-flex'>
                <SettingInput
                    text='#pokemon'
                    value={pokemons}
                    handleChange={(p) => {
                        if (!isPostiveInteger(p)) return;
                        if (p > 10) return setPokemonsError('Kan ikke ha mer enn 10 pokemon');
                        setPokemonsError(false);
                        updatePokemons(p);
                    }}
                    errorMessage={pokemonsError}
                />
                <SettingInput
                    text='#bokstaver'
                    value={letters}
                    handleChange={(p) => {
                        if (p > 26) return setLettersError('Kan ikke ha mer enn 26 bokstaver');
                        setLettersError(false);
                        updateLetters(p);
                    }}
                    errorMessage='Kan ikke ha mer enn 26 bokstaver'
                    errorMessage={lettersError}
                />
            </div>
            <hr />
        </div>
    );
};

export default Settings;