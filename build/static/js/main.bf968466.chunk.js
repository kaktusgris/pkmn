(this.webpackJsonppkmn=this.webpackJsonppkmn||[]).push([[0],{105:function(n,t,e){"use strict";e.r(t);var a=e(1),o=e(35),r=e.n(o),i=e(15),s=e(4),c=e(0),l=function(){return Object(c.jsxs)("div",{className:"home card",children:[Object(c.jsx)("h1",{children:"Diverse pokemonverkt\xf8y"}),Object(c.jsx)("p",{children:'Wizard er for "wizard challenge"'}),Object(c.jsx)("p",{children:"Magic Babies inneholder en liste av challenges for bruk i Magic Babies eller lignende"})]})},u=e(6),d=e(3),m=function n(t){var e=Math.floor(Math.random()*t*1.1);return e>=t?n(t):e},h=function(n){return n[m(n.length)]},y=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").filter((function(t){return!n.includes(t)})).join("");return 0===t.length?".":t.charAt(m(t.length))},p="https://pokeapi.co/api/v2/pokemon/",g=function(){return m(898)},k=function(n){return fetch(p+n).then((function(n){return n.json()}))},f=function(n){var t=n.evolves_to;return 0===t.length?null:t[0]},b=function(n){var t=n.species.url.split("/");return t[t.length-2]},P=function(n){return function(n){return fetch("https://pokeapi.co/api/v2/pokemon-species/"+n).then((function(n){return n.json()}))}(n).then((function(n){return fetch(n.evolution_chain.url)})).then((function(n){return n.json()})).then((function(n){var t=n.chain,e=f(t);if(!e)return[b(t)];var a=f(e);return a?[b(t),b(e),b(a)]:[b(t),b(e)]}))},S=function(){return P(g()).then((function(n){return Promise.all(n.map((function(n){return k(n)}))).then((function(n){return n.map((function(n){return{name:n.name,sprite:n.sprites.front_default}}))}))}))},j=(e(25),e(36)),v=e.n(j),x=(e(64),function(){return Object(c.jsx)(v.a,{type:"BallTriangle",color:"#F35B04",height:100,width:100})}),C=e(14),w=function(n){var t=n.text,e=n.value,a=n.handleChange,o=n.errorMessage;return Object(c.jsxs)("div",{className:"setting-input",children:[Object(c.jsxs)("div",{className:"input-group m-1",children:[Object(c.jsx)("div",{className:"input-group-prepend",children:Object(c.jsx)("span",{className:"input-group-text",children:t})}),Object(c.jsx)("input",{className:"form-control",type:"number",inputMode:"numeric",pattern:"[0-9]*",value:e,onChange:function(n){return a(n.target.value)}})]}),o&&Object(c.jsx)("div",{className:"error-message",children:o})]})},E=function(n){var t=n.pokemons,e=n.letters,o=n.updatePokemons,r=n.updateLetters,i=Object(a.useState)(null),s=Object(d.a)(i,2),l=s[0],u=s[1],m=Object(a.useState)(null),h=Object(d.a)(m,2),y=h[0],p=h[1];return Object(c.jsxs)("div",{className:"wizard-settings",children:[Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{className:"inputs d-flex",children:[Object(c.jsx)(w,{text:"#pokemon",value:t,handleChange:function(n){if(n>10)return p("Kan ikke ha mer enn 10 pokemon");p(!1),o(n)},errorMessage:y}),Object(c.jsx)(w,Object(C.a)({text:"#bokstaver",value:e,handleChange:function(n){if(n>26)return u("Kan ikke ha mer enn 26 bokstaver");u(!1),r(n)},errorMessage:"Kan ikke ha mer enn 26 bokstaver"},"errorMessage",l))]}),Object(c.jsx)("hr",{})]})},O=(e(65),function(n){var t=n.title,e=n.onClick,a=n.disabled?"btn btn-primary m-1 disabled":"btn btn-primary m-1";return Object(c.jsx)("div",{className:a,onClick:e,children:t})}),B=function(){var n=Object(a.useState)(6),t=Object(d.a)(n,2),e=t[0],o=t[1],r=Object(a.useState)(3),i=Object(d.a)(r,2),s=i[0],l=i[1],m=Object(a.useState)(null),h=Object(d.a)(m,2),p=h[0],g=h[1],k=Object(a.useState)(""),f=Object(d.a)(k,2),b=f[0],P=f[1],j=Object(a.useState)(!1),v=Object(d.a)(j,2),C=v[0],w=v[1],B=Object(a.useState)(!1),T=Object(d.a)(B,2),R=T[0],G=T[1],M=function(n){g(n),G(!1)},F=function(n){var t=n.basic,e=n.stage1,a=n.stage2,o=n.index;if(!t)return null;var r,i=a?a.name:e?e.name:t.name;return Object(c.jsxs)("div",{className:"pokemonline",children:[Object(c.jsx)("div",{className:"pokemonline-name",onClick:function(){G(!0),S().then((function(n){!function(n,t){var e=Object(u.a)(p);e[t]=n,g(e)}(n,o),G(!1)}))},children:(r=i,"string"!==typeof r?r:r.charAt(0).toUpperCase()+r.slice(1))}),Object(c.jsx)("img",{src:t.sprite,alt:t.name}),e&&Object(c.jsx)("img",{src:e.sprite,alt:e.name}),a&&Object(c.jsx)("img",{src:a.sprite,alt:a.name})]})};return Object(c.jsxs)("div",{className:"wizard card",children:[Object(c.jsxs)("div",{className:"d-flex",children:[Object(c.jsx)("h1",{className:"title",children:"Wizard Challenge"}),Object(c.jsx)("img",{className:"settings m-1",src:"images/gear.png",onClick:function(){return w(!C)}})]}),C&&Object(c.jsx)(E,{pokemons:e,letters:s,updatePokemons:o,updateLetters:l}),Object(c.jsx)("div",{className:"buttons m-2",children:Object(c.jsx)(O,{className:"generate-button",onClick:function(){g(null),G(!0),function(n){for(var t=[],e=0;e<n;e++)t.push(S());return Promise.all(t)}(e).then(M),P(function(n){for(var t="",e=0;e<n;e++)t+=y(t);return t.split("").sort((function(n,t){return n.localeCompare(t)})).join("")}(s))},title:"Generate"})}),Object(c.jsx)("hr",{}),b&&!R&&Object(c.jsx)("h2",{children:b}),R&&Object(c.jsx)(x,{}),p&&Object(c.jsx)("div",{className:"column",children:p.map((function(n,t){return Object(c.jsx)(F,{basic:n[0],stage1:n[1],stage2:n[2],index:t},"pokemonline-"+t)}))})]})},T=["You must play with at least 5 stage 2 evolutions in your deck.","You may draw 1 additional card at the start of the match.","Play with 4 Prize cards.","You may go through your deck and add any evolution to your hand at the start of the game.","You may not use exact duplicates of Pokemon, however, you may use two different levels of the same Pokemon.","You may not use trainer cards.","When you draw a prize card, your opponent may look at all of your prize cards and choose which one you draw.","You may go through your deck and add a trainer card to your hand at the start of the game. Shuffle the deck afterward.","You cannot use Colorless Pokemon or special Energy cards.","You need to collect 2 fewer Prizes to win. (The number of prize cards remain the same)","Damage from Pokemon is cut in half, rounded down.","You cannot retreat.","Play with your hand face up.","You may go through your deck and add a Basic pokemon to your hand at the start of the game. Shuffle your deck afterwards.","Basic Pokemon cards cannot attack. Only Evolved Pokemon can attack.","Whenever you draw a Prize, you must immediately discard 1 card from your hand.","Your deck may only contain pokemon and energu cards.","Your deck may not contain stage 2 pokemon.","After you draw any number of cards, discard a card from the top of your deck.","Pokemon in your deck may not have more than 80HP.","Your deck may only contain Pokemon of a single energy type.","Your deck may only contain Common and Uncommon cards.","Your Active Pokemon takes 10 damage at the beginning of each of your turns.","Once per turn, when you play a basic energy card from your hand, put 1 damage counter on 1 of your opponent's pokemon.","You must discard a card from your hand as an additional cost of playing a Supporter card. (You can't play a supporter if you can't discard a card).","Your deck may not contain more than one of the same Pokemon, by name.","At the end of your turn, put the top card of your deck in your discard pile.","Your Pokemon have 20HP less than printed.","Your Active Pokemon has weakness to the opposing Active Pokemon.","Your Evolved Pokemon's attacks cost additional Energy.","Once per game, you may shuffle your discard pile into your deck.","Once per game, you may shuffle your opponent's discard pile into their deck.","You may draw a card every time your opponent plays a Basic Pokemon after set-up.","Once per turn, when an opponent does damage to one of your Pokemon, discard the top card of your deck. (Putting damage counters does not cause this effect.)","When one of your pokemon is knocked out, choose one of your pokemon and remove all damage counters from it.","After each player's turn put one damage counter on one of your Benched Pokemon.","Your Active Pokemon is always Burned.","If an attack would Knock Out one of your opponent's Pokemon, flip a coin. If tails, that Pokemon is not Knocked Out and its remaining HP becomes 10 instead.","Damage done to your opponent's Pokemon by your Attacking Pokemon is reduced by 10 damage (before applying Weakness and Resistance).","Each of your Pokemon's attacks gets 'Choose 1 card from your opponent's hand without looking and discard it.'","Each of your Pokemon's attacks gets 'Put 1 damage counter on 1 of your opponent's Pokemon.'","You may draw 2 cards instead of 1 at the beginning of your turn.","Each of your pokemon's attacks gets 'Flip a coin. If tails, this Pokemon does 10 damage to itself.'","Your Pokemon's attack cost (C) more to use.","You cannot have more than 2 Pokemon on your Bench.","Each time 1 of your Pokemon is Knocked Out, discard 3 cards from the top of your deck.","You may choose and discard any 1 card from your hand once during your turn before attacking. If you do, your opponent switches his or her Active Pokemon with 1 of his or her Benched Pok\xe9mon.","You may draw an additional card at the beginning of your turn.","You may flip a coin once during your turn before attacking.If heads, your opponent's Active Pok\xe9mon is now Paralyzed.","You must discard 3 cards from the top of your deck whenever your opponent's Active Pok\xe9mon retreats.","You may choose and discard any 1 card from your hand once during your turn before attacking. If you do, flip a coin. If heads, remove 3 damage counters from your Active Pok\xe9mon.If tails, switch your Active Pok\xe9mon with one of your Benched Pok\xe9mon.","If you have any Colorless-type Pok\xe9mon in play, its type is the same as all types of energy attached to it.","You may, once per turn when you attack, discard an Energy attached to your Active Pok\xe9mon. If you do, the Defending Pok\xe9mon is now Poisoned.","You may discard two cards from your hand once during your turn (before you attack), in order to look at your opponent's hand. If you do, you may choose a supporter card you find there and use the effect of that card.","When you have an Active Pok\xe9mon with Lightning Energy attached to it that is damaged by your opponent's attack (even if that Pok\xe9mon is Knocked Out), the Attacking Pok\xe9mon is now Paralyzed.","If you have an Active Pok\xe9mon with Fighting Energy attached to it, you may choose to search your deck for one Pok\xe9mon Tool card once during your turn (before you attack) and put it in your hand. If you do, you may not attack that turn.","You may, once during your turn (before you attack), discard two Energy cards from your hand in order to return a Pok\xe9mon (and all cards attached to it) from the Bench to your hand.","Any attack that has the word 'Dragon' in its name does 20 more damage.","If you attach a Water Energy card from your hand to the Active Pok\xe9mon, remove all Special Conditions from that Pok\xe9mon.","You may draw a card every time you play a Basic Pok\xe9mon after set-up.","Once per turn (before you attack) you may discard 2 cards from the top of your deck. If you do, your active Pok\xe9mon's attacks do an additional 20 damage.","The Retreat Cost on any of your Pok\xe9mon is reduced by 1.","The Retreat Cost on any of your Pok\xe9mon is increased by 1.","The attacks of any [Fighting] Pok\xe9mon with a Weakness to [Grass] cost [Fighting] less.","Active [Fighting] Pok\xe9mon with a Weakness to [Psychic] have no Retreat Cost.","Whenever a Lightning Pokemon is damaged by an opponent's attack, flip a coin.If heads, the Attacking Pokemon is paralyzed.","If a Fire Pokemon would be damaged by an opponent's attack, its owner may discard 1 Fire energy from that Pokemon. If he or she does, that attack does 20 less damage (before applying weakness or resistance).","Each colorless Pokemon gets +10HP for each colorless in its Retreat Cost.","Whenever a Pok\xe9mon with Weakness to Electric and Resistance to Fighting deals damage with an attack, its owner may discard an Energy from it to switch it with one of his or her Benched Pok\xe9mon.","Once during your turn (before your attack), if you put a Psychic Pok\xe9mon from your hand onto your bench this turn, you may reveal your hand.If you do, you may discard a random card from your opponent's hand.","If a water Pok\xe9mon does damage with an attack, its owner may discard any number of water energy from it. For each energy discarded this way, the attack does 20 damage to each of the opponents bench Pok\xe9mon. Don't apply weakness or resistance for this damage.","Double Battle.","Double Battle.","Grass pokemon get 30 more HP.","After discarding energies by an attack on fire pokemon, attach one fire energy from the discard pile to that pokemon.","When a water pokemon is knocked out by damage from an attack. Flip a coin, if heads return that pokemon to your hand (discard all cards attached to that pokemon).","Lightning pokemon don't have weakness and don't hit for resistance.","Psychic pokemon has 2 less retreat.","Fighting pokemon's attacks does 20 more damage to the defending pokemon (before applying weakness and resistance).","All damage done to metal pokemon is reduced by 10 (before applying weakness and resistance).","When a dark pokemon is damaged by an attack, place 1 damage counter on the attacking pokemon.","Pokemon that has an evolution gets 30 more HP.","Starters can evolve straight away. (Charmander, Turtwig, Wartortle, etc.)","<a https://pkmncards.com/?s=t%3Astadium&display=scan&sort=random> Play with the rules of a random stadium </a>","<a https://pkmncards.com/?s=t%3Astadium&display=scan&sort=random> Play with the rules of a random stadium </a>","<a https://pkmncards.com/?s=t%3Astadium&display=scan&sort=random> Play with the rules of a random stadium </a>","<a https://pkmncards.com/?s=t%3Astadium&display=scan&sort=random> Play with the rules of a random stadium </a>","<a https://pkmncards.com/?s=t%3Astadium&display=scan&sort=random> Play with the rules of a random stadium </a>","\u25cfs get +20HP. \u2605s get -20HP.","Metal pokemon cannot be poisoned. Put 2 more damage counters on poisoned pokemon between turns.","You may discard a card from your hand in order to play a second supporter on your turn.","Basic pokemon has no abilities.","When you bench a pokemon with abilities, place 4 damage counters on that pokemon.","If you knock out an ex pokemon, take an extra prize card.","Play with your prize cards face up","Once during your turn, after you flip any coins for an attack, you may ignore all effects of those coin flips and being flipping those coins again. (You may only use effects that lets you flip coins once during your turn.)","GX Trainer: Rare Candy","GX Trainer: Lysandre","GX Trainer: Professor Oak's New Theory","GX Trainer: Prof. Juniper","GX Trainer: Ninja Boy","GX Trainer: N","GX Trainer: Wally","GX Trainer: Hex maniac (plus poke-powers and poke-bodies)","GX Trainer: Maxie's/Archie's"],R=e(24);R.a.configure({apiKey:"0c3da295-4ceb-479e-a57a-009f67b646e7"});var G=[],M=function(n){(G.length>0?Promise.resolve(G):R.a.card.all({q:"subtypes:Stadium"}).then((function(n){return G=n}))).then((function(t){var e=h(t).rules;return e[0].includes("This card stays in play when you play it")?n(e[1]):n(e[0])}))},F=(e(95),function(){var n=Object(a.useState)([]),t=Object(d.a)(n,2),e=t[0],o=t[1],r=function(n){for(var t=[],a=0;a<n;a++)t.push(h(T));o([].concat(Object(u.a)(e),t))};return Object(c.jsxs)("div",{className:"magicbabies card",children:[Object(c.jsx)("h1",{children:"Magic babies"}),Object(c.jsxs)("div",{children:[Object(c.jsx)(O,{title:"New Challenge",onClick:function(){return r(1)}}),Object(c.jsx)(O,{title:"3 Challenges",onClick:function(){return r(3)}}),Object(c.jsx)(O,{title:"Show All",onClick:function(){o(T)}})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)(O,{title:"Stadium",onClick:function(){M((function(n){return o([].concat(Object(u.a)(e),[n]))}))}}),Object(c.jsx)(O,{title:"Clear",onClick:function(){o([])},disabled:0===e.length})]}),Object(c.jsx)("ul",{children:e.map((function(n){return Object(c.jsx)("li",{children:n},n)}))})]})}),X=(e(96),function(n){var t=n.format;if(!t)return null;if("WotC"===t)return Object(c.jsxs)("div",{className:"rules card",children:[Object(c.jsx)("h2",{children:"Wizards of the Coast"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"The coin flip is performed after choosing your Active and Benched Pok\xe9mon. The winner must play first."}),Object(c.jsx)("li",{children:"No restrictions are placed on the player playing first; players draw a card to start their turn, may play as many Trainers as they like, and end their turn by attacking."}),Object(c.jsx)("li",{children:"A mulligan rewards two extra cards to the opponent, not just one. Players must decide to draw 0, 1, or 2 cards immediately following each mulligan."}),Object(c.jsx)("li",{children:"Players may retreat as many times per turn as they like."}),Object(c.jsx)("li",{children:"Confused Pok\xe9mon that fail to attack do 20 damage to themselves (instead of placing 3 damage counters). This damage applies Weakness and Resistance."}),Object(c.jsx)("li",{children:"Confused Pok\xe9mon must attempt to retreat, first by paying the retreat cost, and then flipping a coin. Heads permits that Pok\xe9mon to retreat, but tails leaves the confused Pok\xe9mon active, and it may not try to retreat again until next turn."}),Object(c.jsx)("li",{children:"PlusPower adds 10 extra damage after applying Weakness and Resistance, not before. (It also must be attached to your Active Pok\xe9mon.)"}),Object(c.jsx)("li",{children:"There is no limit to how many Stadium cards may be played in one turn."}),Object(c.jsx)("li",{children:"Stadium cards with the same name may be played to replace another."})]})]});var e=function(n){var e=n.ex,a=n.dp,o=n.hgss,r=n.bw,i=n.xy,s=n.sm,c=n.swsh;switch(t){case"EX":return e;case"DP":return a;case"HGSS":return o;case"BW":return r;case"XY":return i;case"SM":return s;case"SWSH":return c;default:return"Missing"}};return Object(c.jsxs)("div",{className:"rules card",children:[Object(c.jsx)("h2",{children:e({ex:"EX",dp:"Diamond & Pearl",hgss:"HeartGold & SoulSilver",bw:"Black & White",xy:"XY",sm:"Sun & Moon",swsh:"Sword & Shield"})}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:function(){var n="Set up before flipping a coin to determine who plays first. The winner of the flip will play first",t="Flip a coin. The winner of the flip chooses who will go first. Then set up";return e({ex:n,dp:n,hgss:n,bw:n,xy:t,sm:t,swsh:t})}()}),Object(c.jsx)("li",{children:function(){var n="Draw a card to start their first turn";return e({ex:"Does not draw a card to start their first turn",dp:n,hgss:n,bw:n,xy:n,sm:n,swsh:n})}()}),Object(c.jsx)("li",{children:function(){var n="Cannot play supporters, stadiums or trainers",t="Cannot play supporters",a="Can play any trainer card";return e({ex:t,dp:n,hgss:n,bw:a,xy:a,sm:a,swsh:t})}()}),Object(c.jsx)("li",{children:function(){var n="Fossils are treated as Basic Pok\xe9mon during set-up",t="Fossils are not treated as Basic Pok\xe9mon during set-up";return e({ex:n,dp:n,hgss:n,bw:n,xy:t,sm:t,swsh:t})}()})]})]})}),L=function(){var n=Object(a.useState)(""),t=Object(d.a)(n,2),e=t[0],o=t[1];return Object(c.jsxs)("div",{className:"rules card",children:[Object(c.jsx)("h1",{children:"Rules"}),Object(c.jsx)("div",{children:["WotC","EX","DP","HGSS","BW","XY","SM","SWSH"].map((function(n){return Object(c.jsx)(O,{title:n,onClick:function(){return o(n)}},n)}))}),Object(c.jsx)(X,{format:e})]})},A=(e(104),e(97),function(n){return{name:D(n),list:N(n)}}),D=function(n){return n.split("\n").shift().trim()},N=function(n){return n.split("\n").slice(1).map((function(n){return n.split(/[\,\t]/)})).map((function(n){return{amount:n[0].trim(),name:n[1].trim(),image:""}}))},Y=function(n){var t=n.format,e={name:"",list:[]},o=Object(a.useState)([]),r=Object(d.a)(o,2),i=r[0],s=r[1],l=Object(a.useState)(e),u=Object(d.a)(l,2),m=u[0],h=u[1];Object(a.useEffect)((function(){s(function(n){switch(n){case"DP":return["Luxchomp\t\n2\tLuxray GL lv.X\n2\tLuxray GL\n2\tGarchomp C lv.X\n2\tGarchomp C\n2\tUxie\n1\tAzelf\n1\tUnown G\n1\tUnown Q\n1\tCrobat G\n1\tAmbipom G\n1\tToxicroak G\n1\tLucario GL\n1\tBronzong G\n4\tRoseanne's Research\n4\tCyrus's Conspiracy\n2\tCynthia's Feelings\n1\tBebe's Search\n1\tAaron's Collection\n4\tPoke Turn\n4\tPower Spray\n3\tSP Radar\n1\tLuxury Ball\n1\tVS Seeker\n4\tEnergy Gain\n4\tCall Energy\n3\tSP Energy\n4\tLightning\n2\tPsychic","Dialgachomp\t\n2\tGarchomp C lv.X\n2\tGarchomp C\n1\tDialga G lv.X\n2\tDialga G\n1\tUxie lv.X\n2\tUxie\n2\tCrobat G\n1\tBronzong G\n1\tAmbipom G\n1\tToxicroak G\n1\tAzelf\n1\tUnown G\n1\tUnown Q\n4\tCyrus's Conspiracy\n4\tRoseanne's Research\n1\tLooker's Investigation\n1\tAaron's Collection\n1\tBebe's Search\n4\tPoke Turn\n4\tPower Spray\n3\tSP Radar\n1\tVS Seeker\n1\tLuxury Ball\n4\tEnergy Gain\n1\tExpert Belt\n4\tCall Energy\n4\tMetal Energy\n1\tWarp Energy\n3\tPsychic\n1\tMetal","Spread SP\t\n2\tGallade 4 lv.X\n2\tGallade 4\n1\tInfernape 4 lv.X\n2\tInfernape 4\n2\tCrobat G\n1\tHonchkrow G\n1\tBronzong G\n1\tAmpbipom G\n1\tForretress G\n1\tElectrode G\n1\tSpiritomb\n1\tUnown Q\n1\tUxie\n4\tRoseanne's Research\n4\tCyrus's Conspiracy\n1\tBebe's Search\n1\tAaron's Collection\n4\tSP Radar\n4\tPoke Turn\n4\tSuper Scoop Up\n3\tPower Spray\n1\tVS Seeker\n1\tPremier Ball\n1\tLuxury Ball\n4\tEnergy Gain\n4\tSP Energy\n4\tFire\n3\tPsychic","Gardevoir\t\n3\tGardevoir\n2\tGallade\n4\tKirlia\n4\tRalts\n4\tSpiritomb\n2\tClaydol\n2\tBaltoy\n1\tDusknoir\n1\tDusklops\n1\tDuskull\n1\tRelicanth\n1\tCrobat G\n1\tUnown Q\n4\tRoseanne's Research\n4\tBebe's Search\n3\tTeam Galactic's Wager\n1\tLucian's Assignment\n1\tSwitch\n1\tPoke Turn\n1\tLuxury Ball\n1\tNight Maintenance\n2\tBroken Time Space\n4\tCall Energy\n4\tUpper Energy\n1\tRainbow Energy\n5\tPsychic\n1\tFighting","Beedrill\n2\tBeedrill\n2\tBeedrill\n4\tKakuna\n4\tWeedle\n3\tClaydol\n3\tBaltoy\n1\tUxie\n4\tRoseanne's Research\n4\tBebe's Search\n3\tCynthia's Feelings\n4\tQuick Ball\n4\tPoke Drawer +\n4\tNight Maintenance\n3\tPlus Power\n2\tWarp Point\n1\tLuxury Ball\n2\tExpert Belt\n4\tBroken Time Space\n4\tGrass\n2\tMulti Energy","Gengar\t\n1\tGengar lv.X\n2\tGengar\n1\tGengar\n4\tHaunter\n4\tGastly\n4\tSpiritomb\n2\tClaydol\n2\tBaltoy\n1\tBlissey\n1\tChansey\n1\tRelicanth\n1\tUxie\n1\tAzelf\n1\tUnown Q\n1\tUnown G\n4\tRoseanne's Research\n4\tBebe's Search\n3\tCynthia's feelings\n2\tLooker's Investigation\n1\tSwitch\n1\tNight Maintenance\n1\tLuxury Ball\n1\tExpert Belt\n3\tBroken Time-Space\n4\tCall Energy\n1\tRainbow Energy\n1\tFighting\n7\tPsychic","Flygon\t\n1\tFlygon lv.X\n3\tFlygon\n3\tVibrava\n3\tTrapinch\n2\tPalkia lv.X\n2\tPalkia\n2\tMachamp\n2\tMachoke\n2\tMachop\n2\tClaydol\n2\tBaltoy\n4\tSpiritomb\n1\tAzelf\n1\tUnown Q\n4\tRoseanne's Research\n4\tBebe's Search\n3\tCynthia's Feelings\n1\tNight Maintenance\n1\tPremier Ball\n1\tLuxury Ball\n2\tMemory Berry\n4\tCall Energy\n5\tFighting\n3\tWater\n1\tDark","Cradily\t\n4\tCradily\n2\tLileep\n4\tSableye\n2\tCherim\n2\tCherubi\n1\tClaydol\n1\tBaltoy\n1\tRegice\n1\tUxie\n1\tCrobat G\n4\tBuck's Training\n3\tProfessor Rowan\n3\tVolkner's Philosophy\n3\tBebe's Search\n2\tRoseanne's Research\n2\tFossil Excavator\n4\tRoot Fossil\n4\tRare Candy\n4\tPlus Power\n1\tLuxury Ball\n2\tExpert Belt\n9\tGrass","Gyarados\t\n4\tGyarados\n4\tMagikarp\n4\tSableye\n2\tCrobat G\n2\tUxie\n1\tAzelf\n1\tRegice\n1\tCombee\n1\tUnown Q\n4\tFelicity's Drawing\n4\tVolkner's Philosophy\n4\tRoseanne's Research\n3\tBebe's Search\n4\tSuper Scoop Up\n4\tPokemon Rescue\n3\tPoke Turn\n3\tPlus Power\n2\tLuxury Ball\n3\tBrokern Time Space\n2\tExpert Belt\n2\tCyclone Energy\n2\tDarkness Energy","Yanmega\t\n4\tYanmega\n4\tYanma\n1\tLeafeon lv.X\n3\tLeafeon\n3\tEevee\n1\tShaymin lv.X\n1\tShaymin\n1\tClaydol\n1\tBaltoy\n1\tUxie\n4\tBebe's Search\n4\tFelicity's Drawing\n4\tVolkner's Philosophy\n3\tWarp Point\n3\tSwitch\n2\tVS Seeker\n1\tPremier Ball\n1\tLuxury Ball\n2\tExpert belt\n3\tBroken Time Space\n13\tGrass"];case"HGSS":return["Metagross\n4,Metagross\n3,Metang\n4,Beldum\n2,Mismagius\n2,Misdreavus\n2,Jirachi\n1,Kingdra Prime\n1,Horsea\n2,Cleffa\n1,Elekid\n4,Pokemon Collector\n4,Engineer's Adjustments\n4,Copycat\n3,Twins\n4,Pokemon Communication\n3,Rare Candy\n2,Junk Arm\n1,Pokemon Circulator\n1,Super Scoop Up\n12,Psychic","Lanturn Feraligatr\n3,Feraligatr Prime\n2,Croconaw\n3,Totodile\n3,Lanturn Prime\n3,Chinchou\n1,Magnezone Prime\n1,Magnemite\n1,Tyrogue\n2,Cleffa\n4,Professor Oak's New Theory\n4,Pokemon Collector\n3,Professor Elm's Training Method\n2,Engineer's Adjustments\n2,Fisherman\n4,Pokemon Communication\n3,Rare Candy\n2,Pokemon Reversal\n1,Burned Tower\n1,Double Colorless Energy\n11,Water\n4,Lightning","Meganium\n3\tMeganium Prime\n3\tBayleef\n3\tChicorita\n2\tRoserade\n2\tRoselia\n2\tBlissey Prime\n2\tChansey\n1\tCelebi Prime\n1\tSmeargle\n1\tCleffa\n4\tPokemon Collector\n4\tProfessor Oak's New Theory\n4\tProfessor Elm's Training Method\n1\tTwins\n1\tSeeker\n1\tFlower Shop Lady\n4\tPokemon Communication\n4\tPokegear\n1\tSwitch\n1\tPlusPower\n4\tRainbow Energy\n1\tDouble Colorless Energy\n10\tGrass","Gengar\n4\tGengar Prime\n2\tHaunter\n4\tGastly\n2\tSpiritomb\n1\tVileplume\n1\tOddish\n1\tShaymin\n1\tSmeargle\n1\tMr.Mime\n1\tJirachi\n1\tMime Jr.\n1\tCleffa\n4\tPokemon Collector\n4\tProfessor Oak's New Theory\n4\tTwins\n4\tSeeker\n4\tPokemon Communication\n4\tRare Candy\n2\tLost World\n2\tRescue Energy\n12\tPsychic","Yanmega\n4\tYanmega Prime\n4\tYanma\n2\tVileplume\n1\tBellossom\n2\tGloom\n3\tOddish\n2\tUrsaring Prime\n3\tTeddiursa\n2\tSunflora\n2\tSunkern\n1\tDonphan Prime\n1\tPhanpy\n1\tRoserade\n1\tRoselia\n4\tPokemon Collector\n4\tCopycat\n4\tJudge\n3\tProfessor Oak's New Theory\n4\tPokemon Communication\n4\tDouble Colorless Energy\n4\tRainbow Energy\n4\tGrass","Blastoise\n4\tBlastoise\n2\tWartortle\n4\tSquirtle\n4\tBuizel\n3\tFloatzel\n1\tKingdra Prime\n1\tHorsea\n1\tSmeargle\n1\tPichu\n1\tTyrogue\n1\tCleffa\n4\tPokemon Collector\n4\tCopycat\n4\tProfessor Oak's New Theory\n1\tFlower Shop Lady\n4\tPokemon Communication\n4\tRare Candy\n2\tSwitch\n4\tDouble Colorless Energy\n10\tWater","Typhlosion\n4\tTyplosion Prime\n2\tQuilava\n4\tCindaquil\n4\tMagmortar\n4\tMagmar\n2\tNinetales\n2\tVulpix\n1\tPichu\n1\tCleffa\n4\tPokemon Collector\n4\tTwins\n3\tSage's Training\n2\tFlower Shop Lady\n4\tPokemon Communication\n3\tRare Candy\n2\tBurned Tower\n14\tFire","Umbreon\n3\tUmbreon\n4\tEevee\n3\tCrobat Prime\n1\tGolbat\n3\tZubat\n1\tKingra Prime\n1\tHorsea\n2\tCleffa\n1\tTyrogue\n1\tSmeargle\n4\tPokemon Collector\n4\tProfessor Oak's New Theory\n2\tSage's Training\n2\tCopycat\n2\tTwins\n1\tFlower Shop Lady\n4\tPokemon Communication\n3\tRare Candy\n3\tJunk Arm\n2\tSwitch\n1\tEnergy Exchanger\n4\tRainbow Energy\n4\tDarkness Energy\n2\tPsychic\n2\tDark"];case"BW":return["Rayeels\t\n3\tRayquazaEX\n4\tEelektrik\n4\tTynamo\n2\tKeldeoEX\n1\tRaikouEX\n1\tZekrom\n1\tRayquazaEX\n4\tN\n4\tProfessor Juniper\n3\tColress\n2\tSkyla\n4\tUltra Ball\n3\tLevel Ball\n3\tPokemon Catcher\n1\tMax Potion\n1\tTool Scrapper\n1\tSuper Rod\n1\tDowsing machine\n3\tFloat Stone\n10\tLightning\n4\tFire","Sablegarb\t\n4\tSableye\n2\tGarbodor\n3\tTrubbish\n4\tProfessor Juniper\n4\tSkyla\n4\tN\n4\tLevel Ball\n4\tCrushing Hammer\n3\tRandom Receiver\n3\tPokemon Catcher\n2\tUltra Ball\n2\tEnhanced Hammer\n2\tRecycle\n2\tSuper Rod\n1\tTool Scrapper\n1\tEnergy Retrieval\n1\tEnergy Search\n1\tBicycle\n1\tHypnotoxic Laser\n3\tFloat Stone\n1\tSilver Mirror\n1\tRescue Scarf\n1\tLife Dew\n6\tDark","Blastoise\t\n3\tBlastoise\n1\tWartortle\n3\tSquirtle\n2\tBlack KyuremEX\n2\tKeldeoEX\n1\tKeldeo\n1\tJirachiEX\n1\tExeggcute\n3\tN\n3\tSkyla\n2\tProfessor Juniper\n1\tColress\n4\tRare Candy\n4\tSuperior Energy Retrieval\n3\tUltra Ball\n2\tLevel Ball\n2\tPokemon Catcher\n2\tTool Scrapper\n1\tEnergy Search\n1\tHeavy Ball\n1\tComputer Search\n4\tTropical Beach\n10\tWater\n3\tLightning","Klinklang\t\n2\tKlinklang\n2\tKlinklang\n2\tKlang\n4\tKlink\n2\tDarkraiEX\n1\tSableye\n1\tRegisteelEX\n1\tCobalionEX\n1\tKeldeoEX\n1\tJirachiEX\n4\tN\n4\tSkyla\n2\tProfessor Juniper\n2\tColress\n4\tUltra Ball\n3\tRare Candy\n2\tPokemon Catcher\n2\tHeavy Ball\n2\tMax Potion\n1\tTool Scrapper\n1\tSuper Rod\n1\tComputer Search\n3\tTropical Beach\n4\tPrism Energy\n8\tMetal","Tool Drop\t\n4\tTrubbish\n4\tSigilyph\n1\tElectrode\n1\tVoltorb\n1\tMasquerain\n1\tSurskit\n4\tProfessor Juniper\n4\tN\n2\tColress\n1\tElesa\n4\tLevel Ball\n4\tPokemon Catcher\n1\tRevive\n1\tSuper Rod\n1\tDowsing Machine\n4\tFloat Stone\n4\tExp Share\n3\tEviolite\n3\tSilver Bangle\n2\tSilver Mirror\n10\tPsychic","Plasma\t\n4\tDeoxysEX\n3\tKyurem\n2\tThundurusEX\n1\tLugiaEX\n1\tAbsol\n1\tKeldeoEX\n4\tN\n4\tProfessor Juniper\n3\tColress\n1\tSkyla\n4\tHypnotoxic Laser\n4\tPokemon Catcher\n3\tTeam Plasma Ball\n3\tColress Machine\n2\tUltra Ball\n1\tTool Scrapper\n1\tDowsing Machine\n3\tFloat Stone\n2\tVirbank City Gym\n4\tPlasma Energy\n4\tPrism Energy\n1\tDouble Colorless Energy\n2\tLightning\n2\tWater","Zebstrika\t\n4\tZebstrika\n4\tBlitzle\n2\tGarbodor\n1\tTrubbish\n1\tJirachiEX\n4\tProfessor Juniper\n4\tN\n1\tGhetsis\n1\tElesa\n4\tLevel Ball\n4\tHypnotoxic Laser\n2\tPokemon Catcher\n1\tTool Scrapper\n1\tEnhanced Hammer\n1\tUltra Ball\n1\tSuper Rod\n2\tSilver Bangle\n1\tFloat Stone\n1\tExp. Share\n1\tGiant Cape\n1\tSilver Mirror\n1\tRock Guard\n3\tVirbank City\n4\tPrism Energy\n10\tLightning","Flygon\t\n4\tFlygon\n1\tVibrava\n4\tTrapinch\n3\tAccelgor\n3\tShelmet\n1\tDusknoir\n1\tDuskull\n1\tMusharna\n1\tMunna\n1\tMewEX\n1\tKeldeoEX\n4\tSkyla\n4\tN\n2\tProfessor Juniper\n2\tColress\n4\tRare Candy\n3\tLevel Ball\n3\tUltra Ball\n2\tPokemon Catcher\n1\tPokemon Communication\n1\tTool Scrapper\n1\tComputer Search\n3\tFloat Stone\n1\tSilver Bangle\n4\tTropical Beach\n4\tDouble Colorless Energy","Garchomp\t\n4\tGarchomp\n3\tGabite\n4\tGible\n4\tAltaria\n4\tSwablu\n4\tN\n4\tColress\n3\tSkyla\n3\tProfessor Juniper\n4\tLevel Ball\n2\tPokemon Catcher\n2\tRare Candy\n2\tSuper Rod\n1\tSwitch\n1\tTool Scrapper\n1\tScoop Up Cyclone\n2\tSilver Bangle\n3\tBlend Energy [W][L][F][M]\n7\tFighting\n2\tWater"];case"XY":return["Megaman\t\n4\tManectricEX\n3\tMManectricEX\n2\tArticuno\n1\tRegice\n1\tRaikou\n1\tHoopaEX\n1\tShayminEX\n4\tProfessor Sycamore\n2\tN\n2\tLysandre\n1\tHex Maniac\n1\tAZ\n1\tGiovanni's Scheme\n4\tUltra ball\n4\tTrainers' Mail\n4\tVS Seeker\n2\tBattle Compressor\n1\tSwitch\n1\tProfessor's Letter\n1\tEnhanced Hammer\n4\tManectric Spirit Link\n1\tMuscle Band\n4\tRough Seas\n7\tLightning\n3\tWater","Volcanion\t\n4\tVolcanion\n4\tVolcanionEX\n1\tStaryu\n1\tStarmie\n1\tShayminEX\n4\tProfessor Sycamore\n2\tN\n2\tLysandre\n1\tFisherman\n1\tOlympia\n1\tBlacksmith\n4\tUltra Ball\n4\tMax Elixir\n4\tVS Seeker\n1\tEscape Rope\n1\tProfessor's Letter\n1\tStartling Megaphone\n3\tFighting Fury Belt\n3\tFloat Stone\n3\tScorched Earth\n14\tFire","Night March\t\n4\tJoltik\n4\tPumpkaboo\n4\tLampent\n2\tMew\n2\tShayminEX\n3\tProfessor Sycamore\n2\tLysandre\n2\tHex Maniac\n1\tN\n1\tAZ\n1\tPokemon Ranger\n1\tTeammates\n4\tUltra Ball\n4\tVS Seeker\n4\tTrainers' Mail\n4\tBattle Compressor\n4\tPuzzle of Time\n1\tEnhanced Hammer\n1\tStartling Megaphone\n1\tEscape Rope\n1\tSpecial Charge\n2\tFighting Fury Belt\n2\tDimension Valley\n1\tParallel City\n4\tDouble Colorless Energy","Vespi & Friends\t\n4\tCombee\n4\tVespiquen\n4\tUnown\n3\tKlefki\n2\tPikachu\n2\tRaichu\n2\tZorua\n2\tZoroark\n2\tEevee\n1\tFlareon\n1\tVaporeon\n1\tShayminEX\n4\tProfessor Sycamore\n2\tN\n2\tLysandre\n1\tPokemon Ranger\n1\tHex Maniac\n4\tVS Seeker\n4\tUltra Ball\n3\tAcro Bike\n2\tSpecial Charge\n1\tRevitalizer\n1\tBuddy-Buddy Rescue\n2\tFloat Stone\n1\tForest of Giant Plants\n4\tDouble Colorless Energy","Vespi Bats\t\n4\tVespiquen\n4\tCombee\n4\tYveltal\n3\tCrobat\n3\tGolbat\n4\tZubat\n1\tShaymin\n4\tProfessor Sycamore\n1\tN\n1\tLysandre\n1\tTeammates\n1\tHex Maniac\n1\tAZ\n4\tUltra Ball\n4\tTrainers' Mail\n4\tVS Seeker\n3\tBattle Compressor\n2\tMuscle Band\n1\tParallel City\n4\tDouble Colorless Energy\n6\tDark","Yveltal\t\n2\tYveltalEX\n2\tYveltal\n2\tYveltal\n1\tYveltal Break\n1\tDarkraiEX\n2\tGarbodor\n2\tTrubbish\n2\tShayminEX\n4\tProfessor Sycamore\n4\tN\n2\tLysandre\n1\tDelinquent\n4\tUltra Ball\n4\tMax Elixir\n4\tVS Seeker\n3\tTrainers' Mail\n3\tFloat Stone\n2\tFighting Fury Belt\n2\tParallel City\n4\tDouble Colorless Energy\n9\tDark","Tyrantrum\t\n3\tBronzong\n3\tBronzor\n1\tBronzong Break\n2\tZoroark\n2\tZorua\n2\tTyrantrumEX\n1\tGiratinaEX\n1\tAegislashEX\n1\tGenesectEX\n1\tMagearnaEX\n1\tCobalion\n1\tSmeargle\n2\tShayminEX\n4\tProfessor Sycamore\n2\tN\n2\tLysandre\n1\tAZ\n4\tUltra Ball\n4\tVS Seeker\n1\tSacred Ash\n1\tSpecial Charge\n1\tEscape Rope\n2\tFloat Stone\n2\tMuscle Band\n2\tSky Field\n4\tDouble Dragon Energy\n7\tMetal\n2\tFighting","Sceptile\t\n4\tSceptileEX\n4\tMSceptileEX\n1\tAriados\n1\tSpinarak\n1\tHoopaEX\n4\tProfessor Sycamore\n3\tSteven\n2\tN\n2\tSkyla\n1\tPokemon Ranger\n1\tDelinquent\n1\tGiovanni's Scheme\n1\tPokemon Center Lady\n1\tLysandre\n1\tFisherman\n4\tUltra Ball\n4\tVS Seeker\n2\tMega Turbo\n1\tRepeat Ball\n1\tEvosoda\n1\tProfessor's Letter\n1\tEnergy Retrieval\n1\tRevitalizer\n4\tSceptile Spirit Link\n3\tSilent Lab\n10\tGrass","Waterbox\t\n3\tSeismitoadEX\n2\tManaphyEX\n1\tGlaceonEX\n1\tRegice\n1\tArticuno\n2\tShayminEX\n1\tHoopaEX\n4\tProfessor Sycamore\n3\tN\n2\tDelinquent\n1\tLysandre\n1\tPokemon Center Lady\n1\tAZ\n1\tTeam Flare Grunt\n1\tHex Maniac\n4\tUltra Ball\n4\tVS Seeker\n4\tMax Elixir\n3\tEnergy Switch\n1\tStartling Megaphone\n3\tFighting Fury Belt\n3\tRough Seas\n1\tParallel City\n12\tWater","Greninja\t\n3\tGreninja Break\n3\tGreninja\n1\tGreninja\n4\tFrogadier\n3\tFroakie\n4\tTalonflame\n1\tOctillery\n1\tRemoraid\n4\tProfessor Sycamore\n4\tN\n1\tLysandre\n1\tFisherman\n4\tDive Ball\n4\tTrainers Mail\n3\tVS Seeker\n2\tSuper Rod\n2\tUltra Ball\n2\tFloat Stone\n3\tRough Seas\n2\tSplash Energy\n8\tWater","Altaria\t\n3\tMAltariaEX\n4\tAltariaEX\n4\tJynx\n1\tShayminEX\n4\tProfessor Sycamore\n3\tN\n2\tLysandre\n1\tHex Maniac\n1\tOlympia\n4\tUltra Ball\n4\tVS Seeker\n4\tFairy Drop\n3\tMega Turbo\n1\tEscape Rope\n1\tStartling Megaphone\n1\tSpecial Charge\n4\tAltaria Spirit Link\n3\tFairy Garden\n4\tDouble Colorless Energy\n1\tWonder Energy\n7\tFairy","Toad Tina\t\n3\tSeismitoadEX\n2\tGiratinaEX\n1\tLatiosEX\n2\tShayminEX\n3\tProfessor Sycamore\n2\tLysandre\n1\tN\n1\tSkyla\n1\tGiovanni's Scheme\n1\tXerosic\n1\tAZ\n1\tHex Maniac\n1\tTeam Flare Grunt\n4\tTrainers' Mail\n4\tVS Seeker\n4\tSuper Scoop Up\n4\tPuzzle of Time\n4\tCrushing Hammer\n3\tUltra Ball\n2\tHead Ringer\n2\tFighting Fury Belt\n2\tFloat Stone\n1\tMuscle Band\n1\tSilent Lab\n1\tTeam Aqua's Secret Base\n4\tDouble Dragon Energy\n4\tDouble Colorless Energy"];default:return[]}}(t).map(A)),h(e)}),[t]);var y=function(n){var t=n.amount,e=n.name;return Object(c.jsx)("div",{children:"".concat(t," - ").concat(e)})};return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:t}),i.map((function(n){return Object(c.jsx)(O,{title:n.name,onClick:function(){return h(n)}})})),m.list.map((function(n){return Object(c.jsx)(y,{amount:n.amount,name:n.name})}))]})},W=function(){var n=Object(a.useState)(""),t=Object(d.a)(n,2),e=t[0],o=t[1];return Object(c.jsxs)("div",{className:"decklists card",children:[Object(c.jsx)("h1",{children:"Decklists"}),Object(c.jsx)("div",{children:["DP","HGSS","BW","XY"].map((function(n){return Object(c.jsx)(O,{title:n,onClick:function(){return o(n)}},n)}))}),Object(c.jsx)(Y,{format:e})]})},U=function(){return Object(c.jsx)(i.b,{className:"home-tab m-1",to:"/pkmn/",children:Object(c.jsx)("img",{src:"images/favicon.ico",alt:"home"})})},H=function(n){var t=n.title,e=n.path;return Object(c.jsx)(i.b,{className:"header-tab",to:"/pkmn/"+e,children:Object(c.jsx)(O,{title:t})})},z=function(){return Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)(U,{}),Object(c.jsx)(H,{title:"Wizard",path:"wizard"}),Object(c.jsx)(H,{title:"Magic Babies",path:"magicbabies"}),Object(c.jsx)(H,{title:"Decklists",path:"decklists"}),Object(c.jsx)(H,{title:"Rules",path:"rules"})]})},V=function(){return Object(c.jsx)(i.a,{children:Object(c.jsxs)("div",{children:[Object(c.jsx)(z,{}),Object(c.jsxs)(s.c,{children:[Object(c.jsx)(s.a,{exact:!0,path:"/pkmn",children:Object(c.jsx)(l,{})}),Object(c.jsx)(s.a,{path:"/pkmn/wizard",children:Object(c.jsx)(B,{})}),Object(c.jsx)(s.a,{path:"/pkmn/magicbabies",children:Object(c.jsx)(F,{})}),Object(c.jsx)(s.a,{path:"/pkmn/decklists",children:Object(c.jsx)(W,{})}),Object(c.jsx)(s.a,{path:"/pkmn/rules",children:Object(c.jsx)(L,{})})]})]})})};r.a.render(Object(c.jsx)(V,{}),document.getElementById("root"))},25:function(n,t,e){},64:function(n,t,e){},65:function(n,t,e){},93:function(n,t){},95:function(n,t,e){},96:function(n,t,e){},97:function(n,t,e){}},[[105,1,2]]]);
//# sourceMappingURL=main.bf968466.chunk.js.map