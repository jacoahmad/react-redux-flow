/**
 * Node fetch async function example
 */
export default async function() {
  return await(await fetch('https://jsonplaceholder.typicode.com/users')).json();
}