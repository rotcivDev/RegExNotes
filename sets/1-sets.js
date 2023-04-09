/**
 * # Sets
 *
 * A [] is used to match a set fo characters
 *
 */

const sets = {
  "[02468]": /[02468]/g,
  "n[aã].": /n[aã]./g,
};

const text = "1,2,3,4,5,6,a.b c!d?e[f";

console.log(`
#########################################
Match 0 | 2 | 4 | 6 
inside the text: ${text}

result --> ${text.match(sets["[02468]"])}
#########################################
`);

// Example using pt_BR
const text2 = "João não vai passear na moto.";

console.log(`
#########################################
Match 'na ' && 'não'
inside the text: ${text2}

result --> ${text2.match(sets["n[aã]."])}
#########################################
`);
