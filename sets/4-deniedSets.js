/**
 * # Denied Sets
 *
 * To deny a pattern, declare a ^ at the start of a set
 * ex: /[^...]/g
 *
 */

const text = "1,2,3,4,5,6,a.b c!d?e[f";

console.log(`
#########################################
Match only letters inside the text: ${text}
RegEx: /[^\d!\?\[\s,\.]/g

result --> ${text.match(/[^\d!\?\[\s,\.]/g)}
#########################################
`);

const text2 = '1: !"#$%&()*+,-./ 2: :;<=>?@';
console.log(`
#########################################
Match only numbers inside the text: ${text2}
RegEx: /[^!-/:-@\s]/g

result --> ${text2.match(/[^!-/:-@\s]/g)}
#########################################
`);
