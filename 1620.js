const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const pokemon = input.slice(0, N);
const problem = input.slice(N);
const pokemonMap = new Map(pokemon.map((e, i) => [e, i]));

console.log(problem.map((e) => {
    return isNaN(e) ? pokemonMap.get(e) + 1 : pokemon[Number(e) - 1];
}).join('\n'));