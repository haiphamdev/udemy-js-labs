export function countWords(str) {
  if (str === '') return {};

  return str.split(' ').filter((x) => x !== '').length;
}
