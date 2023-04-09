/**
 * Pipe operator
 *
 * Match alternatives.
 */

const text = "The choices are yes, not or don't know!";

console.log(`Matching the choices --> ${text.match(/yes|not|don't know/g)}`);
