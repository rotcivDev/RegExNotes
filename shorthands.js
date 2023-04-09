/**
 * # Shorthands
 *
 * Used to enhance RegExp match patterns
 *
 */

const text = `1,2,3,4,5,6,a.b c!d?e\r\f	-
f_g`;

/** /\d/ --> Match numbers /[0-9]/ */
const numberRegex = /\d/g;
console.log(`
#########################################
 Match only numbersinside  the text: ${text}

result --> ${text.match(numberRegex)}
#########################################
`);

/** /\D/ --> Match not number /[^0-9]/ */
const notNumberRegex = /\D/g;
console.log(`
#########################################
 Match not numbers inside the text: ${text}

result --> ${text.match(notNumberRegex)}
#########################################
`);

/** /\w/ --> Match letters, numbers and _ /[a-zA-Z0-9_]/ */
const onlyLettersNumbersUnderscoreRegEx = /\w/g;
console.log(`
#########################################
 Match letters, numbers and _ inside the text: ${text}

result --> ${text.match(onlyLettersNumbersUnderscoreRegEx)}
#########################################
`);

/** /\W/ --> Match not letters, numbers and _ /[^a-zA-Z0-9_]/ */
const NotLettersNumbersUnderscoreRegEx = /\W/g;
console.log(`
#########################################
 Match not letters, numbers and _ inside the text: ${text}

result --> ${text.match(NotLettersNumbersUnderscoreRegEx)}
#########################################
`);

/** /\s/ --> Match spaces [ \t\n\r\f] */
const spacesRegEx = /\s/g;
console.log(`
#########################################
 Match spaces inside the text: ${text}

result --> ${text.match(spacesRegEx)}
#########################################
`);

/** /\S/ --> Match not spaces [^ \t\n\r\f] */
const notSpacesRegEx = /\S/g;
console.log(`
#########################################
 Match not spaces inside the text: ${text}

result --> ${text.match(notSpacesRegEx)}
#########################################
`);
