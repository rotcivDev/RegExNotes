/**
 * # The dot character
 *
 * Matches a single character, without caring what that character is.
 * The only exception are line break characters.
 *
 */

// Examples

const text = "1,2,3,4,5,6,7,8,9,0";
const floats = "8.3,7.1,8.8,10.0,8.25";

console.log("dot matching comma -> ", text.match(/1.2/g));
console.log("dot matching all characters -> ", text.match(/./g));
console.log(
  `matching floats (${floats}) starting with 8 and using a literal dot) -> `,
  floats.match(/8\.[1-9]+/g)
);
console.log(`dot matching floats (${floats}) -> `, floats.match(/.+\..+/g));
