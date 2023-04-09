/**
 * Challenge: Find the letters a and b with 3 spaces between
 */

const challengeText = "a   b";

const challengeRegEx = /a\s{3}b/;

console.log(
  'Find letters "a" and "b" with 3 spaces between: ',
  challengeText.match(challengeRegEx)
);
