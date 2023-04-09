const text = "1,2,3,4,5,6,a.b c!d?e";

const commaRegEx = /,/;
console.log(text.split(commaRegEx));
console.log(text.match(commaRegEx));
console.log(text.match(/A/i));
console.log(text.match(/.b c!/));
