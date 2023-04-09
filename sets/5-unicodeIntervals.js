/**
 * # Unicode Intervals
 *
 * Match Unicode table intervals
 *
 */

const text = "áéíóú àèìòù âêîôû ç ãõ ü";

console.log(`
#########################################
Match all the characters with a range
inside the text: ${text}
RegEx: /[À-ü]/g 

result --> ${text.match(/[À-ü]/g)}
#########################################
`);
