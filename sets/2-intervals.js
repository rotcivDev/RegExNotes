/**
 * # Intervals
 *
 * Intervals are declared inside a set
 *
 * Interval declarations should follow the UNICODE or ASCII table order.
 * The following RegExps going to end in a exception error:
 *    /[a-Z]/g
 *    /[4-1]/g
 *
 * Another care is at the letters declaration using intervals.
 * The following RegExp will bring some characters between the uppercase
 * and lowercase letters.
 *    /[A-z/g]
 *
 * To catch only upper and lower case letter the corret RegExp is:
 *    /[a-zA-Z]/g
 */

const intervals = {
  "[a-z]": /[a-z]/g,
  "[b-d]": /[b-d]/g,
  "[2-4]": /[2-4]/g,
  "[A-Z1-3]": /[A-Z1-3]/gi,
};

const text = "1,2,3,4,5,6,a.b c!d?e[f";

console.log(`
#########################################
Match all lowercase letters
inside the text: ${text}

result --> ${text.match(intervals["[a-z]"])}
#########################################
`);

console.log(`
#########################################
Match lowercase letters between 'b' and 'd'
inside the text: ${text}

result --> ${text.match(intervals["[b-d]"])}
#########################################
`);

console.log(`
#########################################
Match all numbers from 2 to 4
inside the text: ${text}

result --> ${text.match(intervals["[2-4]"])}
#########################################
`);

console.log(`
#########################################
Match all lowercase and uppercase letters from 'A' to 'Z'
and numbers from 1 to 3
inside the text: ${text}

result --> ${text.match(intervals["[A-Z1-3]"])}
#########################################
`);
