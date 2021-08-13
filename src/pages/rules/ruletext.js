import React from 'react';

const RuleText = ({ format }) => {
    if (!format) return null;

    if (format === 'WotC') return (
        <div className='rules card'>
            <h2>Wizards of the Coast</h2>
            <ul>
                <li>The coin flip is performed after choosing your Active and Benched Pokémon. The winner must play first.</li>
                <li>No restrictions are placed on the player playing first; players draw a card to start their turn, may play as many Trainers as they like, and end their turn by attacking.</li>
                <li>A mulligan rewards two extra cards to the opponent, not just one. Players must decide to draw 0, 1, or 2 cards immediately following each mulligan.</li>
                <li>Players may retreat as many times per turn as they like.</li>
                <li>Confused Pokémon that fail to attack do 20 damage to themselves (instead of placing 3 damage counters). This damage applies Weakness and Resistance.</li>
                <li>Confused Pokémon must attempt to retreat, first by paying the retreat cost, and then flipping a coin. Heads permits that Pokémon to retreat, but tails leaves the confused Pokémon active, and it may not try to retreat again until next turn.</li>
                <li>PlusPower adds 10 extra damage after applying Weakness and Resistance, not before. (It also must be attached to your Active Pokémon.)</li>
                <li>There is no limit to how many Stadium cards may be played in one turn.</li>
                <li>Stadium cards with the same name may be played to replace another.</li>
            </ul>
        </div>
    );


    const getRuleText = ({ ex, dp, hgss, bw, xy, sm, swsh }) => {
        switch (format) {
            case 'EX':
                return ex;
            case 'DP':
                return dp;
            case 'HGSS':
                return hgss;
            case 'BW':
                return bw;
            case 'XY':
                return xy;
            case 'SM':
                return sm;
            case 'SWSH':
                return swsh;
            default:
                return 'Missing';
        }
    }

    const formatName = () => {
        return getRuleText({
            ex: 'EX', dp: 'Diamond & Pearl', hgss: 'HeartGold & SoulSilver', bw: 'Black & White', xy: 'XY', sm: 'Sun & Moon', swsh: 'Sword & Shield'
        });
    }

    const flipRule = () => {
        const setupFirst = 'Set up before flipping a coin to determine who plays first. The winner of the flip will play first';
        const flipFirst = 'Flip a coin. The winner of the flip chooses who will go first. Then set up';
        return getRuleText({
            ex: setupFirst, dp: setupFirst, hgss: setupFirst, bw: setupFirst, xy: flipFirst, sm: flipFirst, swsh: flipFirst
        });
    }

    const drawRule = () => {
        const noDraw = 'Does not draw a card to start their first turn'
        const draw = 'Draw a card to start their first turn';
        return getRuleText({
            ex: noDraw, dp: draw, hgss: draw, bw: draw, xy: draw, sm: draw, swsh: draw
        });
    }

    const trainerRule = () => {
        const nothing = 'Cannot play supporters, stadiums or trainers';
        const noSupporter = 'Cannot play supporters';
        const noRestrictions = 'Can play any trainer card';
        return getRuleText({
            ex: noSupporter, dp: nothing, hgss: nothing, bw: noRestrictions, xy: noRestrictions, sm: noRestrictions, swsh: noSupporter
        });
    }

    const fossilRule = () => {
        const fossilAsBasic = 'Fossils are treated as Basic Pokémon during set-up';
        const fossilAsTrainer = 'Fossils are not treated as Basic Pokémon during set-up';
        return getRuleText({
            ex: fossilAsBasic, dp: fossilAsBasic, hgss: fossilAsBasic, bw: fossilAsBasic, xy: fossilAsTrainer, sm: fossilAsTrainer, swsh: fossilAsTrainer
        });
    }

    return (
        <div className='rules card'>
            <h2>{formatName()}</h2>
            <ul>
            <li>{flipRule()}</li>
            <li>{drawRule()}</li>
            <li>{trainerRule()}</li>
            <li>{fossilRule()}</li>
            </ul>
        </div>
    )
}

export default RuleText;