import React from 'react';
import './wizard.scss';

const Settings = ({ pokemons, letters, updatePokemons, updateLetters }) => (
    <div className='wizard-settings'>
        <div className='inputs d-flex'>
            <div className="input-group m-1">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">#pokemon</span>
                </div>
                <input type="text" className="form-control" aria-label="antall pokemon" aria-describedby="basic-addon1"
                    value={pokemons}
                    onChange={e => updatePokemons(e.target.value)}
                />
            </div>
            <div className="input-group m-1">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon2">#bokstaver</span>
                </div>
                <input type="text" className="form-control" aria-label="antall pokemon" aria-describedby="basic-addon2"
                    value={letters}
                    onChange={e => updateLetters(e.target.value)}
                />
            </div>
        </div>
        <hr />
    </div>
)

export default Settings;