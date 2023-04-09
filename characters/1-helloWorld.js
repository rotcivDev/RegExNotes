/**
 * # Regex basics
 * - Using the g and i flags
 * - Match spaces
 */

const text =
  "House. Beautiful is the yellow house of the corner with the HOUSEHOME street";

const caseSensitiveRegEx = /house/g;
const regEx = /house/gi;

console.log(text.match(caseSensitiveRegEx));
console.log(text.match(regEx));
console.log(text.match(/e o/));

// TAB
console.log("matching tab with t", "	".match(/\t/g));
console.log("matching tab with s", "	".match(/\s/g));

// Space
console.log("matching space", " ".match(/\s/g));
