import React, { useState } from 'react';
import * as tcg from '../../api/tcgapi';
import Spinner from '../../common/spinner';

const Letters = ({ letters, handleLetterClick }) => {

    const [supporters, setSupporters] = useState(null);
    const [items, setItems] = useState(null);
    const [energies, setEnergies] = useState(null);
    const [stadiums, setStadiums] = useState(null);
    const [showType, setShowType] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    const extractData = (card) => ({ id: card.id, name: card.name, img: card.images.small })

    const hentSupporters = () => {
        if (showType === 'supporter') return setShowType(null);
        if (supporters?.length > 0) return setShowType('supporter');
        setIsLoading(true);
        tcg.getSupportersStartingWithOneOf(letters)
            .then(letters => [].concat.apply([], letters))
            .then(supporters => supporters.map(extractData))
            .then(supporters => {
                setSupporters(supporters);
                setShowType('supporter');
                setIsLoading(false);
            });
    };

    const hentItems = () => {
        if (showType === 'item') return setShowType(null);
        if (items) return setShowType('item');
        setIsLoading(true);
        tcg.getItemsStartingWithOneOf(letters)
            .then(letters => [].concat.apply([], letters))
            .then(items => items.map(extractData))
            .then(items => {
                setItems(items);
                setShowType('item');
                setIsLoading(false);
            });
    };

    const hentStadiums = () => {
        if (showType === 'stadium') return setShowType(null);
        if (stadiums) return setShowType('stadium');
        setIsLoading(true);
        tcg.getStadiumsStartingWithOneOf(letters)
            .then(letters => [].concat.apply([], letters))
            .then(stadiums => stadiums.map(extractData))
            .then(s => {
                setStadiums(s);
                setShowType('stadium');
                setIsLoading(false);
            });
    };

    const hentEnergies = () => {
        if (showType === 'energy') return setShowType(null);
        if (energies) return setShowType('energy');
        setIsLoading(true);
        tcg.getSpecialEnergiesStartingWithOneOf(letters)
            .then(letters => [].concat.apply([], letters))
            .then(energies => energies.map(extractData))
            .then(energies => {
                setEnergies(energies);
                setShowType('energy');
                setIsLoading(false);
            });
    };

    const CardDisplayer = ({ cardlist }) => {
        return <div className='card-displayer d-flex flex-wrap'>
            {cardlist?.length === 0
                ? <h3>Fant ingen kort</h3>
                : cardlist?.map(card => <img className='card' src={card.img} key={card.id} />)
            }
        </div>
    };

    const getCardlist = () => {
        switch (showType) {
            case 'supporter': return supporters;
            case 'item': return items;
            case 'stadium': return stadiums;
            case 'energy': return energies;
            default: return null;
        }
    }

    return (
        <div className='letters content'>
            <h2 className='main-letters' onClick={handleLetterClick}>{letters}</h2>
            <div className='btn btn-primary m-1' onClick={hentSupporters}> Supporters </div>
            <div className='btn btn-primary m-1' onClick={hentItems}> Items </div>
            <div className='btn btn-primary m-1' onClick={hentStadiums}> Stadiums </div>
            <div className='btn btn-primary m-1' onClick={hentEnergies}> Energies </div>
            {isLoading ? <Spinner /> : <CardDisplayer cardlist={getCardlist()} />}
        </div>
    );
}

export default Letters;