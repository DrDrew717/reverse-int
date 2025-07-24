module.exports = function reverse(n) {
  let i = 0;
  let result = '';
  const string = Math.abs(n).toString();

  for (i = 0; i < string.length; i += 1) {
    result = `${string[i]}${result}`;
  }

  return Number(result);

  // return Number(Math.abs(n).toString().split('').reverse().join(''));
};
