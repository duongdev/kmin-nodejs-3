/**
 * Get sum of 2 numbers
 * @param {number} num1 Number 1
 * @param {number} num2 Number 2
 * @returns {number} sum of 2 numbers
 */
const add = (num1, num2) => {
  console.log(`Adding ${num1} to ${num2}`);
  const sum = num1 + num2;

  return sum;
};

const numA = 5;
const numB = 7;

const result = add(numA, numB);

console.log(`${numA} + ${numB} = ${result}`);
