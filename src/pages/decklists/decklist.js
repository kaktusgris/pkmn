import React, { useEffect, useState } from 'react';
import Button from '../../common/button'
import * as deckUtils from './deckutils';

const Decklist = ({ format }) => {
    const emptyDecklist = { name: '', list: [] };
    const [decks, setDecks] = useState([]);
    const [decklist, setDecklist] = useState(emptyDecklist);

    useEffect(() => {
        setDecks(
            deckUtils.getDecks(format).map(deckUtils.formatDeck)
        );
        setDecklist(emptyDecklist)
    }, [format]);

    const Card = ({ amount, name }) => <div>{`${amount} - ${name}`}</div>;

    return (
        <div>
            <h2>{format}</h2>
            {decks.map(deck => <Button title={deck.name} onClick={() => setDecklist(deck)} />)}
            {decklist.list.map(row => <Card amount={row.amount} name={row.name} />)}
        </div>
    )
}

export default Decklist;