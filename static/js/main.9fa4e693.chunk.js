(this.webpackJsonppkmn=this.webpackJsonppkmn||[]).push([[0],{103:function(e,o,a){"use strict";a.r(o);var t=a(0),n=a(35),r=a.n(n),s=a(15),c=a(3),i=a(1),d=function(){return Object(i.jsxs)("div",{className:"home card",children:[Object(i.jsx)("h1",{children:"Diverse pokemonverkt\xf8y"}),Object(i.jsx)("p",{children:'Wizard er for "wizard challenge"'}),Object(i.jsx)("p",{children:"Magic Babies inneholder en liste av challenges for bruk i Magic Babies eller lignende"})]})},u=a(6),m=a(5),h=function e(o){var a=Math.floor(Math.random()*o*1.1);return a>=o?e(o):a},l=function(e){return e[h(e.length)]},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").filter((function(o){return!e.includes(o)})).join("");return 0===o.length?".":o.charAt(h(o.length))},p="https://pokeapi.co/api/v2/pokemon/",f=function(){return h(898)},k=function(e){return fetch(p+e).then((function(e){return e.json()}))},g=function(e){var o=e.evolves_to;return 0===o.length?null:o[0]},b=function(e){var o=e.species.url.split("/");return o[o.length-2]},j=function(e){return function(e){return fetch("https://pokeapi.co/api/v2/pokemon-species/"+e).then((function(e){return e.json()}))}(e).then((function(e){return fetch(e.evolution_chain.url)})).then((function(e){return e.json()})).then((function(e){var o=e.chain,a=g(o);if(!a)return[b(o)];var t=g(a);return t?[b(o),b(a),b(t)]:[b(o),b(a)]}))},v=function(){return j(f()).then((function(e){return Promise.all(e.map((function(e){return k(e)}))).then((function(e){return e.map((function(e){return{name:e.name,sprite:e.sprites.front_default}}))}))}))},P=(a(25),a(36)),O=a.n(P),w=(a(64),function(){return Object(i.jsx)(O.a,{type:"BallTriangle",color:"#F35B04",height:100,width:100})}),x=a(14),Y=function(e){var o=e.text,a=e.value,t=e.handleChange,n=e.errorMessage;return Object(i.jsxs)("div",{className:"setting-input",children:[Object(i.jsxs)("div",{className:"input-group m-1",children:[Object(i.jsx)("div",{className:"input-group-prepend",children:Object(i.jsx)("span",{className:"input-group-text",children:o})}),Object(i.jsx)("input",{className:"form-control",type:"number",inputMode:"numeric",pattern:"[0-9]*",value:a,onChange:function(e){return t(e.target.value)}})]}),n&&Object(i.jsx)("div",{className:"error-message",children:n})]})},A=function(e){var o=e.pokemons,a=e.letters,n=e.updatePokemons,r=e.updateLetters,s=Object(t.useState)(null),c=Object(m.a)(s,2),d=c[0],u=c[1],h=Object(t.useState)(null),l=Object(m.a)(h,2),y=l[0],p=l[1];return Object(i.jsxs)("div",{className:"wizard-settings",children:[Object(i.jsx)("hr",{}),Object(i.jsxs)("div",{className:"inputs d-flex",children:[Object(i.jsx)(Y,{text:"#pokemon",value:o,handleChange:function(e){if(e>10)return p("Kan ikke ha mer enn 10 pokemon");p(!1),n(e)},errorMessage:y}),Object(i.jsx)(Y,Object(x.a)({text:"#bokstaver",value:a,handleChange:function(e){if(e>26)return u("Kan ikke ha mer enn 26 bokstaver");u(!1),r(e)},errorMessage:"Kan ikke ha mer enn 26 bokstaver"},"errorMessage",d))]}),Object(i.jsx)("hr",{})]})},N=function(){var e=Object(t.useState)(6),o=Object(m.a)(e,2),a=o[0],n=o[1],r=Object(t.useState)(3),s=Object(m.a)(r,2),c=s[0],d=s[1],h=Object(t.useState)(null),l=Object(m.a)(h,2),p=l[0],f=l[1],k=Object(t.useState)(""),g=Object(m.a)(k,2),b=g[0],j=g[1],P=Object(t.useState)(!1),O=Object(m.a)(P,2),x=O[0],Y=O[1],N=Object(t.useState)(!1),C=Object(m.a)(N,2),I=C[0],B=C[1],W=function(e){f(e),B(!1)},z=function(e){var o=e.basic,a=e.stage1,t=e.stage2,n=e.index;if(!o)return null;var r,s=t?t.name:a?a.name:o.name;return Object(i.jsxs)("div",{className:"pokemonline",children:[Object(i.jsx)("div",{className:"pokemonline-name",onClick:function(){return v().then((function(e){return function(e,o){var a=Object(u.a)(p);a[o]=e,f(a)}(e,n)}))},children:(r=s,"string"!==typeof r?r:r.charAt(0).toUpperCase()+r.slice(1))}),Object(i.jsx)("img",{src:o.sprite,alt:o.name}),a&&Object(i.jsx)("img",{src:a.sprite,alt:a.name}),t&&Object(i.jsx)("img",{src:t.sprite,alt:t.name})]})};return Object(i.jsxs)("div",{className:"wizard card",children:[Object(i.jsxs)("div",{className:"d-flex",children:[Object(i.jsx)("h1",{className:"title",children:"Wizard Challenge"}),Object(i.jsx)("img",{className:"settings m-1",src:"images/gear.png",onClick:function(){return Y(!x)}})]}),x&&Object(i.jsx)(A,{pokemons:a,letters:c,updatePokemons:n,updateLetters:d}),Object(i.jsx)("div",{className:"buttons m-2",children:Object(i.jsx)("div",{className:"generate-button btn btn-primary m-1",onClick:function(){f(null),B(!0),function(e){for(var o=[],a=0;a<e;a++)o.push(v());return Promise.all(o)}(a).then(W),j(function(e){for(var o="",a=0;a<e;a++)o+=y(o);return o.split("").sort((function(e,o){return e.localeCompare(o)})).join("")}(c))},children:" Generate "})}),Object(i.jsx)("hr",{}),b&&!I&&Object(i.jsx)("h2",{children:b}),I&&Object(i.jsx)(w,{}),p&&Object(i.jsx)("div",{className:"column",children:p.map((function(e,o){return Object(i.jsx)(z,{basic:e[0],stage1:e[1],stage2:e[2],index:o},"pokemonline-"+o)}))})]})},C=["You must play with at least 5 stage 2 evolutions in your deck.","You may draw 1 additional card at the start of the match.","Play with 4 Prize cards.","You may go through your deck and add any evolution to your hand at the start of the game.","You may not use exact duplicates of Pokemon, however, you may use two different levels of the same Pokemon.","You may not use trainer cards.","When you draw a prize card, your opponent may look at all of your prize cards and choose which one you draw.","You may go through your deck and add a trainer card to your hand at the start of the game. Shuffle the deck afterward.","You cannot use Colorless Pokemon or special Energy cards.","You need to collect 2 fewer Prizes to win. (The number of prize cards remain the same)","Damage from Pokemon is cut in half, rounded down.","You cannot retreat.","Play with your hand face up.","You may go through your deck and add a Basic pokemon to your hand at the start of the game. Shuffle your deck afterwards.","Basic Pokemon cards cannot attack. Only Evolved Pokemon can attack.","Whenever you draw a Prize, you must immediately discard 1 card from your hand.","Your deck may only contain pokemon and energu cards.","Your deck may not contain stage 2 pokemon.","After you draw any number of cards, discard a card from the top of your deck.","Pokemon in your deck may not have more than 80HP.","Your deck may only contain Pokemon of a single energy type.","Your deck may only contain Common and Uncommon cards.","Your Active Pokemon takes 10 damage at the beginning of each of your turns.","Once per turn, when you play a basic energy card from your hand, put 1 damage counter on 1 of your opponent's pokemon.","You must discard a card from your hand as an additional cost of playing a Supporter card. (You can't play a supporter if you can't discard a card).","Your deck may not contain more than one of the same Pokemon, by name.","At the end of your turn, put the top card of your deck in your discard pile.","Your Pokemon have 20HP less than printed.","Your Active Pokemon has weakness to the opposing Active Pokemon.","Your Evolved Pokemon's attacks cost additional Energy.","Once per game, you may shuffle your discard pile into your deck.","Once per game, you may shuffle your opponent's discard pile into their deck.","You may draw a card every time your opponent plays a Basic Pokemon after set-up.","Once per turn, when an opponent does damage to one of your Pokemon, discard the top card of your deck. (Putting damage counters does not cause this effect.)","When one of your pokemon is knocked out, choose one of your pokemon and remove all damage counters from it.","After each player's turn put one damage counter on one of your Benched Pokemon.","Your Active Pokemon is always Burned.","If an attack would Knock Out one of your opponent's Pokemon, flip a coin. If tails, that Pokemon is not Knocked Out and its remaining HP becomes 10 instead.","Damage done to your opponent's Pokemon by your Attacking Pokemon is reduced by 10 damage (before applying Weakness and Resistance).","Each of your Pokemon's attacks gets 'Choose 1 card from your opponent's hand without looking and discard it.'","Each of your Pokemon's attacks gets 'Put 1 damage counter on 1 of your opponent's Pokemon.'","You may draw 2 cards instead of 1 at the beginning of your turn.","Each of your pokemon's attacks gets 'Flip a coin. If tails, this Pokemon does 10 damage to itself.'","Your Pokemon's attack cost (C) more to use.","You cannot have more than 2 Pokemon on your Bench.","Each time 1 of your Pokemon is Knocked Out, discard 3 cards from the top of your deck.","You may choose and discard any 1 card from your hand once during your turn before attacking. If you do, your opponent switches his or her Active Pokemon with 1 of his or her Benched Pok\xe9mon.","You may draw an additional card at the beginning of your turn.","You may flip a coin once during your turn before attacking.If heads, your opponent's Active Pok\xe9mon is now Paralyzed.","You must discard 3 cards from the top of your deck whenever your opponent's Active Pok\xe9mon retreats.","You may choose and discard any 1 card from your hand once during your turn before attacking. If you do, flip a coin. If heads, remove 3 damage counters from your Active Pok\xe9mon.If tails, switch your Active Pok\xe9mon with one of your Benched Pok\xe9mon.","If you have any Colorless-type Pok\xe9mon in play, its type is the same as all types of energy attached to it.","You may, once per turn when you attack, discard an Energy attached to your Active Pok\xe9mon. If you do, the Defending Pok\xe9mon is now Poisoned.","You may discard two cards from your hand once during your turn (before you attack), in order to look at your opponent's hand. If you do, you may choose a supporter card you find there and use the effect of that card.","When you have an Active Pok\xe9mon with Lightning Energy attached to it that is damaged by your opponent's attack (even if that Pok\xe9mon is Knocked Out), the Attacking Pok\xe9mon is now Paralyzed.","If you have an Active Pok\xe9mon with Fighting Energy attached to it, you may choose to search your deck for one Pok\xe9mon Tool card once during your turn (before you attack) and put it in your hand. If you do, you may not attack that turn.","You may, once during your turn (before you attack), discard two Energy cards from your hand in order to return a Pok\xe9mon (and all cards attached to it) from the Bench to your hand.","Any attack that has the word 'Dragon' in its name does 20 more damage.","If you attach a Water Energy card from your hand to the Active Pok\xe9mon, remove all Special Conditions from that Pok\xe9mon.","You may draw a card every time you play a Basic Pok\xe9mon after set-up.","Once per turn (before you attack) you may discard 2 cards from the top of your deck. If you do, your active Pok\xe9mon's attacks do an additional 20 damage.","The Retreat Cost on any of your Pok\xe9mon is reduced by 1.","The Retreat Cost on any of your Pok\xe9mon is increased by 1.","The attacks of any [Fighting] Pok\xe9mon with a Weakness to [Grass] cost [Fighting] less.","Active [Fighting] Pok\xe9mon with a Weakness to [Psychic] have no Retreat Cost.","Whenever a Lightning Pokemon is damaged by an opponent's attack, flip a coin.If heads, the Attacking Pokemon is paralyzed.","If a Fire Pokemon would be damaged by an opponent's attack, its owner may discard 1 Fire energy from that Pokemon. If he or she does, that attack does 20 less damage (before applying weakness or resistance).","Each colorless Pokemon gets +10HP for each colorless in its Retreat Cost.","Whenever a Pok\xe9mon with Weakness to Electric and Resistance to Fighting deals damage with an attack, its owner may discard an Energy from it to switch it with one of his or her Benched Pok\xe9mon.","Once during your turn (before your attack), if you put a Psychic Pok\xe9mon from your hand onto your bench this turn, you may reveal your hand.If you do, you may discard a random card from your opponent's hand.","If a water Pok\xe9mon does damage with an attack, its owner may discard any number of water energy from it. For each energy discarded this way, the attack does 20 damage to each of the opponents bench Pok\xe9mon. Don't apply weakness or resistance for this damage.","Double Battle.","Double Battle.","Grass pokemon get 30 more HP.","After discarding energies by an attack on fire pokemon, attach one fire energy from the discard pile to that pokemon.","When a water pokemon is knocked out by damage from an attack. Flip a coin, if heads return that pokemon to your hand (discard all cards attached to that pokemon).","Lightning pokemon don't have weakness and don't hit for resistance.","Psychic pokemon has 2 less retreat.","Fighting pokemon's attacks does 20 more damage to the defending pokemon (before applying weakness and resistance).","All damage done to metal pokemon is reduced by 10 (before applying weakness and resistance).","When a dark pokemon is damaged by an attack, place 1 damage counter on the attacking pokemon.","Pokemon that has an evolution gets 30 more HP.","Starters can evolve straight away. (Charmander, Turtwig, Wartortle, etc.)","<a https://pkmncards.com/?s=t%3Astadium&display=scan&sort=random> Play with the rules of a random stadium </a>","<a https://pkmncards.com/?s=t%3Astadium&display=scan&sort=random> Play with the rules of a random stadium </a>","<a https://pkmncards.com/?s=t%3Astadium&display=scan&sort=random> Play with the rules of a random stadium </a>","<a https://pkmncards.com/?s=t%3Astadium&display=scan&sort=random> Play with the rules of a random stadium </a>","<a https://pkmncards.com/?s=t%3Astadium&display=scan&sort=random> Play with the rules of a random stadium </a>","\u25cfs get +20HP. \u2605s get -20HP.","Metal pokemon cannot be poisoned. Put 2 more damage counters on poisoned pokemon between turns.","You may discard a card from your hand in order to play a second supporter on your turn.","Basic pokemon has no abilities.","When you bench a pokemon with abilities, place 4 damage counters on that pokemon.","If you knock out an ex pokemon, take an extra prize card.","Play with your prize cards face up","Once during your turn, after you flip any coins for an attack, you may ignore all effects of those coin flips and being flipping those coins again. (You may only use effects that lets you flip coins once during your turn.)","GX Trainer: Rare Candy","GX Trainer: Lysandre","GX Trainer: Professor Oak's New Theory","GX Trainer: Prof. Juniper","GX Trainer: Ninja Boy","GX Trainer: N","GX Trainer: Wally","GX Trainer: Hex maniac (plus poke-powers and poke-bodies)","GX Trainer: Maxie's/Archie's"],I=a(24);I.a.configure({apiKey:"0c3da295-4ceb-479e-a57a-009f67b646e7"});var B=[],W=function(e){(B.length>0?Promise.resolve(B):I.a.card.all({q:"subtypes:Stadium"}).then((function(e){return B=e}))).then((function(o){var a=l(o).rules;return a[0].includes("This card stays in play when you play it")?e(a[1]):e(a[0])}))},z=(a(94),function(){var e=Object(t.useState)([]),o=Object(m.a)(e,2),a=o[0],n=o[1],r=function(e){for(var o=[],t=0;t<e;t++)o.push(l(C));n([].concat(Object(u.a)(a),o))},s=0===a.length?"btn btn-primary m-1 disabled":"btn btn-primary m-1";return Object(i.jsxs)("div",{className:"magicbabies card",children:[Object(i.jsx)("h1",{children:"Magic babies"}),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"btn btn-primary m-1",onClick:function(){return r(1)},children:" New Challenge "}),Object(i.jsx)("div",{className:"btn btn-primary m-1",onClick:function(){return r(3)},children:" 3 Challenges "}),Object(i.jsx)("div",{className:"btn btn-primary m-1",onClick:function(){n(C)},children:" Show All "})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"btn btn-primary m-1",onClick:function(){W((function(e){return n([].concat(Object(u.a)(a),[e]))}))},children:" Stadium "}),Object(i.jsx)("div",{className:s,onClick:function(){n([])},children:" Clear "})]}),Object(i.jsx)("ul",{children:a.map((function(e){return Object(i.jsx)("li",{children:e},e)}))})]})}),T=(a(102),a(95),function(){return Object(i.jsx)(s.b,{className:"home-tab m-1",to:"/pkmn/",children:Object(i.jsx)("img",{src:"images/favicon.ico",alt:"home"})})}),E=function(e){var o=e.title,a=e.path;return Object(i.jsx)(s.b,{className:"header-tab btn btn-primary m-1",to:"/pkmn/"+a,children:o})},S=function(){return Object(i.jsxs)("div",{className:"header",children:[Object(i.jsx)(T,{}),Object(i.jsx)(E,{title:"Wizard",path:"wizard"}),Object(i.jsx)(E,{title:"Magic Babies",path:"magicbabies"})]})},M=function(){return Object(i.jsx)(s.a,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(S,{}),Object(i.jsxs)(c.c,{children:[Object(i.jsx)(c.a,{exact:!0,path:"/pkmn",children:Object(i.jsx)(d,{})}),Object(i.jsx)(c.a,{path:"/pkmn/wizard",children:Object(i.jsx)(N,{})}),Object(i.jsx)(c.a,{path:"/pkmn/magicbabies",children:Object(i.jsx)(z,{})})]})]})})};r.a.render(Object(i.jsx)(M,{}),document.getElementById("root"))},25:function(e,o,a){},64:function(e,o,a){},92:function(e,o){},94:function(e,o,a){},95:function(e,o,a){}},[[103,1,2]]]);
//# sourceMappingURL=main.9fa4e693.chunk.js.map