import {randomFromList} from '../../utils/random';

let challengesRemoved = [];
let challengesAvailable = ["You must play with at least 5 stage 2 evolutions in your deck.",
    "You may draw 1 additional card at the start of the match.",
    "Play with 4 Prize cards.",
    "You may go through your deck and add any evolution to your hand at the start of the game.",
    "You may not use exact duplicates of Pokemon, however, you may use two different levels of the same Pokemon.",
    "You may not use trainer cards.",
    "When you draw a prize card, your opponent may look at all of your prize cards and choose which one you draw.",
    "You may go through your deck and add a trainer card to your hand at the start of the game. Shuffle the deck afterward.",

    "You cannot use Colorless Pokemon or special Energy cards.",
    "You need to collect 2 fewer Prizes to win. (The number of prize cards remain the same)",
    "Damage from Pokemon is cut in half, rounded down.",
    "You cannot retreat.",
    "Play with your hand face up.",
    "You may go through your deck and add a Basic pokemon to your hand at the start of the game. Shuffle your deck afterwards.",
    "Basic Pokemon cards cannot attack. Only Evolved Pokemon can attack.",
    "Whenever you draw a Prize, you must immediately discard 1 card from your hand.",

    "Your deck may only contain pokemon and energu cards.",
    "Your deck may not contain stage 2 pokemon.",
    "After you draw any number of cards, discard a card from the top of your deck.",
    "Pokemon in your deck may not have more than 80HP.",
    "Your deck may only contain Pokemon of a single energy type.",
    "Your deck may only contain Common and Uncommon cards.",
    "Your Active Pokemon takes 10 damage at the beginning of each of your turns.",

    "Once per turn, when you play a basic energy card from your hand, put 1 damage counter on 1 of your opponent's pokemon.",
    "You must discard a card from your hand as an additional cost of playing a Supporter card. (You can't play a supporter if you can't discard a card).",
    "Your deck may not contain more than one of the same Pokemon, by name.",
    "At the end of your turn, put the top card of your deck in your discard pile.",
    "Your Pokemon have 20HP less than printed.",
    "Your Active Pokemon has weakness to the opposing Active Pokemon.",
    "Your Evolved Pokemon's attacks cost additional Energy.",

    "Once per game, you may shuffle your discard pile into your deck.",
    "Once per game, you may shuffle your opponent's discard pile into their deck.",
    "You may draw a card every time your opponent plays a Basic Pokemon after set-up.",
    "Once per turn, when an opponent does damage to one of your Pokemon, discard the top card of your deck. (Putting damage counters does not cause this effect.)",
    "When one of your pokemon is knocked out, choose one of your pokemon and remove all damage counters from it.",
    "After each player's turn put one damage counter on one of your Benched Pokemon.",
    "Your Active Pokemon is always Burned.",
    "If an attack would Knock Out one of your opponent's Pokemon, flip a coin. If tails, that Pokemon is not Knocked Out and its remaining HP becomes 10 instead.",

    "Damage done to your opponent's Pokemon by your Attacking Pokemon is reduced by 10 damage (before applying Weakness and Resistance).",
    "Each of your Pokemon's attacks gets 'Choose 1 card from your opponent's hand without looking and discard it.'",
    "Each of your Pokemon's attacks gets 'Put 1 damage counter on 1 of your opponent's Pokemon.'",
    "You may draw 2 cards instead of 1 at the beginning of your turn.",
    "Each of your pokemon's attacks gets 'Flip a coin. If tails, this Pokemon does 10 damage to itself.'",
    "Your Pokemon's attack cost (C) more to use.",
    "You cannot have more than 2 Pokemon on your Bench.",
    "Each time 1 of your Pokemon is Knocked Out, discard 3 cards from the top of your deck.",

    "You may choose and discard any 1 card from your hand once during your turn before attacking. If you do, your opponent switches his or her Active Pokemon with 1 of his or her Benched Pokémon.",
    "You may draw an additional card at the beginning of your turn.",
    "You may flip a coin once during your turn before attacking.If heads, your opponent's Active Pokémon is now Paralyzed.",
    "You must discard 3 cards from the top of your deck whenever your opponent's Active Pokémon retreats.",
    "You may choose and discard any 1 card from your hand once during your turn before attacking. If you do, flip a coin. If heads, remove 3 damage counters from your Active Pokémon.If tails, switch your Active Pokémon with one of your Benched Pokémon.",

    "If you have any Colorless-type Pokémon in play, its type is the same as all types of energy attached to it.",
    "You may, once per turn when you attack, discard an Energy attached to your Active Pokémon. If you do, the Defending Pokémon is now Poisoned.",
    "You may discard two cards from your hand once during your turn (before you attack), in order to look at your opponent's hand. If you do, you may choose a supporter card you find there and use the effect of that card.",
    "When you have an Active Pokémon with Lightning Energy attached to it that is damaged by your opponent's attack (even if that Pokémon is Knocked Out), the Attacking Pokémon is now Paralyzed.",
    "If you have an Active Pokémon with Fighting Energy attached to it, you may choose to search your deck for one Pokémon Tool card once during your turn (before you attack) and put it in your hand. If you do, you may not attack that turn.",
    "You may, once during your turn (before you attack), discard two Energy cards from your hand in order to return a Pokémon (and all cards attached to it) from the Bench to your hand.",
    "Any attack that has the word 'Dragon' in its name does 20 more damage.",
    "If you attach a Water Energy card from your hand to the Active Pokémon, remove all Special Conditions from that Pokémon.",

    "You may draw a card every time you play a Basic Pokémon after set-up.",
    "Once per turn (before you attack) you may discard 2 cards from the top of your deck. If you do, your active Pokémon's attacks do an additional 20 damage.",
    "The Retreat Cost on any of your Pokémon is reduced by 1.",
    "The Retreat Cost on any of your Pokémon is increased by 1.",

    "The attacks of any [Fighting] Pokémon with a Weakness to [Grass] cost [Fighting] less.",
    "Active [Fighting] Pokémon with a Weakness to [Psychic] have no Retreat Cost.",
    "Whenever a Lightning Pokemon is damaged by an opponent's attack, flip a coin.If heads, the Attacking Pokemon is paralyzed.",
    "If a Fire Pokemon would be damaged by an opponent's attack, its owner may discard 1 Fire energy from that Pokemon. If he or she does, that attack does 20 less damage (before applying weakness or resistance).",
    "Each colorless Pokemon gets +10HP for each colorless in its Retreat Cost.",
    "Whenever a Pokémon with Weakness to Electric and Resistance to Fighting deals damage with an attack, its owner may discard an Energy from it to switch it with one of his or her Benched Pokémon.",
    "Once during your turn (before your attack), if you put a Psychic Pokémon from your hand onto your bench this turn, you may reveal your hand.If you do, you may discard a random card from your opponent's hand.",
    "If a water Pokémon does damage with an attack, its owner may discard any number of water energy from it. For each energy discarded this way, the attack does 20 damage to each of the opponents bench Pokémon. Don't apply weakness or resistance for this damage.",

    "Double Battle.",
    "Double Battle.",

    "Grass pokemon get 30 more HP.",
    "After discarding energies by an attack on fire pokemon, attach one fire energy from the discard pile to that pokemon.",
    "When a water pokemon is knocked out by damage from an attack. Flip a coin, if heads return that pokemon to your hand (discard all cards attached to that pokemon).",
    "Lightning pokemon don't have weakness and don't hit for resistance.",
    "Psychic pokemon has 2 less retreat.",
    "Fighting pokemon's attacks does 20 more damage to the defending pokemon (before applying weakness and resistance).",
    "All damage done to metal pokemon is reduced by 10 (before applying weakness and resistance).",
    "When a dark pokemon is damaged by an attack, place 1 damage counter on the attacking pokemon.",

    "Pokemon that has an evolution gets 30 more HP.",
    "Starters can evolve straight away. (Charmander, Turtwig, Wartortle, etc.)",
    "<a https://pkmncards.com/?s=t%3Astadium&display=scan&sort=random> Play with the rules of a random stadium </a>",
    "<a https://pkmncards.com/?s=t%3Astadium&display=scan&sort=random> Play with the rules of a random stadium </a>",
    "<a https://pkmncards.com/?s=t%3Astadium&display=scan&sort=random> Play with the rules of a random stadium </a>",
    "<a https://pkmncards.com/?s=t%3Astadium&display=scan&sort=random> Play with the rules of a random stadium </a>",
    "<a https://pkmncards.com/?s=t%3Astadium&display=scan&sort=random> Play with the rules of a random stadium </a>",

    "●s get +20HP. ★s get -20HP.",
    "Metal pokemon cannot be poisoned. Put 2 more damage counters on poisoned pokemon between turns.",
    "You may discard a card from your hand in order to play a second supporter on your turn.",
    "Basic pokemon has no abilities.",
    "When you bench a pokemon with abilities, place 4 damage counters on that pokemon.",
    "If you knock out an ex pokemon, take an extra prize card.",
    "Play with your prize cards face up",
    "Once during your turn, after you flip any coins for an attack, you may ignore all effects of those coin flips and being flipping those coins again. (You may only use effects that lets you flip coins once during your turn.)",

    "GX Trainer: Rare Candy",
    "GX Trainer: Lysandre",
    "GX Trainer: Professor Oak's New Theory",
    "GX Trainer: Prof. Juniper",
    "GX Trainer: Ninja Boy",
    "GX Trainer: N",
    "GX Trainer: Wally",
    "GX Trainer: Hex maniac (plus poke-powers and poke-bodies)",
    "GX Trainer: Maxie's/Archie's"];

export const getChallenge = () => {
    return randomFromList(challengesAvailable);
}

export const getAllChallenges = () => {
    return challengesAvailable;
}

export const resetChallenges = () => {
    i = 0;
    challenges.push.apply(challenges, removed);
    removed = [];
}