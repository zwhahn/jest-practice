export function capatalize(inputString) {
  const inputStringArray = inputString.split("");
  for (let i = 0; i < inputStringArray.length; i++) {
    if (i === 0) {
      inputStringArray[i] = inputStringArray[i].toUpperCase();
    } else {
      inputStringArray[i] = inputStringArray[i].toLowerCase();
    }
  }
  return inputStringArray.join("");
}