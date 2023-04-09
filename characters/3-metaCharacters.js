/**
 * # Meta Characters
 * examples: . ? * + - ^ $ | [] {} () \
 *
 * ## Representatives
 * . -> any character
 * [] -> character set
 * [^] -> denied character set
 *
 * ## Quantifiers
 * ? -> zero or one
 * * -> zero or more
 * + -> one or more
 * {n,m} -> from n to m
 *
 * ## Anchors
 * ^ -> line start
 * $ -> line end
 * \b -> start or end of word
 *
 * ## Others
 * \ -> use metacharacters as literal
 * | -> "or" operator
 * () -> group definition
 *
 *
 */

const text = "1,2,3,4,5,6,a.b c!d?e";
const pointRegEx = /\./g;
const symbolsRegEx = /,|\.|\?|!| /g;

console.log(text.split(pointRegEx));
console.log(text.split(symbolsRegEx));
