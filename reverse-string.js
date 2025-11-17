export function reverseString(inputString) {
  const inputStringArray = inputString.split("");
  const reverseArray = [];
  for (let i = 0; i < inputStringArray.length + 1; i++) {
    reverseArray.push(inputStringArray[inputStringArray.length - i]);
  }
  return reverseArray.join("");
}
