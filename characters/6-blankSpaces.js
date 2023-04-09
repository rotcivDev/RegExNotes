/**
 * # Blank spaces and line break
 *
 * \t -> tab
 * \s -> space
 * \n -> new line
 */

const text = `
pi	z
z	a s!
`;

console.log(
  'Find "pizzas!" with tabs, space and line breaks',
  text.match(/pi\tz\nz\ta\ss!/)
);
