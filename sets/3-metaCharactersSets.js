/**
 * # Meta Characters inside Sets
 *
 * Inside sets, some meta characters are interpreted as literals.
 * At some conditions, the - character persist as a range operator
 */

const text = ".$+*?-";

console.log(`
#########################################
Match . $ + * ? characters
inside the text: ${text}

result --> ${text.match(/[+.?*$]/g)}

#########################################
`);

console.log(`
#########################################
Using - character as a range operator literal
RegEx: /[$-?]/g
inside the text: ${text}

result --> ${text.match(/[$-?]/g)}
#########################################
`);

console.log(`
#########################################
Using - character as a literal
inside the text: ${text}

case1: Find the $ - ? characters
case2: Find the - ? characters

case1 result with /[-$?]/g --> ${text.match(/[-$?]/g)}
case1 result with /[$-?] using scape /g --> ${text.match(/[$\-?]/g)}
case2 result with /[-?]/g --> ${text.match(/[-?]/g)}
case2 result with /[?-]/g --> ${text.match(/[?-]/g)}
#########################################
`);
