const whiteVotes = 2000;
const nullVotes = 1000;
const validVotes = 40000;
const voters = validVotes + whiteVotes + nullVotes;
const pctWhiteVotes = (whiteVotes * 100) / voters;
const pctNullVotes = (nullVotes * 100) / voters;
const pctValidVotes = (validVotes * 100) / voters;

console.log(`Total Eleitores: ${voters}`);
console.log(`Votos Brancos: ${whiteVotes}, Percentual: ${pctWhiteVotes.toFixed(2)}%`);
console.log(`Votos Nulos: ${nullVotes}, Percentual: ${pctNullVotes.toFixed(2)}%`);
console.log(`Votos Válidos: ${validVotes}, Percentual ${pctValidVotes.toFixed(2)}%`);
