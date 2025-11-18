export function analyzeArray(inputArray) {
  let ans = {};

  // Average
  let total = inputArray.reduce((sum, current) => sum + current, 0);
  let average = Math.round(total / inputArray.length);
  ans["average"] = average;

  // Min
  let min = null;
  for (let i = 0; i < inputArray.length; i++) {
    if (min === null || inputArray[i] < min) {
      min = inputArray[i];
    }
  }
  ans["min"] = min;

  // Max
  let max = null;
  for (let i = 0; i < inputArray.length; i++) {
    if (max === null || inputArray[i] > max) {
      max = inputArray[i];
    }
  }
  ans["max"] = max;

  // Length
  ans["length"] = inputArray.length;

  return ans;
}
