import * as hgss from './lists/hgss';
import * as dp from './lists/dp';
import * as bw from './lists/bw';
import * as xy from './lists/xy';

export const formatDeck = (deck) => {
    return { name: getDeckName(deck), list: getDeckList(deck) }
}

export const getDeckName = (deck) => {
    return deck.split('\n').shift().trim();
}

export const getDeckList = (deck) => {
    return deck
        .split('\n')
        .slice(1)
        .map(string => string.split(/[\,\t]/))
        .map(row => ({
            amount: row[0].trim(),
            name: row[1].trim(),
            image: ""
        }));
}

export const getDecks = (format) => {
    switch (format) {
        case 'DP': return [
            dp.luxchomp,
            dp.dialgachomp,
            dp.spreadSp,
            dp.gardevoir,
            dp.beedrill,
            dp.gengar,
            dp.flygon,
            dp.cradily,
            dp.gyarados,
            dp.yanmega,
        ];
        case 'HGSS': return [
            hgss.metagross,
            hgss.lanturn,
            hgss.meganium,
            hgss.gengar,
            hgss.yanmega,
            hgss.blastoise,
            hgss.typhlosion,
            hgss.umbreon,
        ];
        case 'BW': return [
            bw.rayeels,
            bw.sablegarb,
            bw.blastoise,
            bw.klinklang,
            bw.toolDrop,
            bw.plasma,
            bw.zebstrika,
            bw.flygon,
            bw.garchomp,
        ];
        case 'XY': return [
            xy.megaman,
            xy.volcanion,
            xy.nightMarch,
            xy.vespiFriends,
            xy.vespiBats,
            xy.yveltal,
            xy.tyrantrum,
            xy.sceptile,
            xy.waterbox,
            xy.greninja,
            xy.altaria,
            xy.toadTina,
        ];
        default: return [];
    }
}