/**
 * # RegEx methods in JavaScript examples
 */

const text = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";

const regexNine = RegExp("9");
console.log("RegEx methods");
console.log(regexNine.test(text));
console.log(regexNine.exec(text));

const lettersRegEx = /[a-f]/g;
console.log("String methods");
console.log(text.match(lettersRegEx));
console.log(text.search(lettersRegEx));
console.log(text.split(lettersRegEx));
console.log(text.replace(lettersRegEx, "found"));
console.log(text[text.search(lettersRegEx)]);
