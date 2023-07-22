function findMax(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return undefined;
  }

  let max = numbers[0]; 

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {

      max = numbers[i];
    }
  }

  return max;
}
const numbers = [12, 56, 78, 23, 9, 45];
const maxNumber = findMax(numbers);
console.log(maxNumber); 
