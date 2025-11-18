const alphabet = {
  0: "a",
  1: "b",
  2: "c",
  3: "d",
  4: "e",
  5: "f",
  6: "g",
  7: "h",
  8: "i",
  9: "j",
  10: "k",
  11: "l",
  12: "m",
  13: "n",
  14: "o",
  15: "p",
  16: "q",
  17: "r",
  18: "s",
  19: "t",
  20: "u",
  21: "v",
  22: "w",
  23: "x",
  24: "y",
  25: "z",
};

export function caesarCipher(msg, shift) {
  const msgArrayShifted = [];
  const msgArray = msg.split("");
  const msgDict = { 0: { ltr: "a", cap: true } };

  for (let i = 0; i < msgArray.length; i++) {
    msgDict[i] = { ltr: msgArray[i], upperCase: false };
    if (msgArray[i] == msgArray[i].toUpperCase()) {
      msgDict[i].upperCase = true;
    }
  }

  for (const key in msgDict) {
    msgDict[key].num = letterToNumber(msgDict[key].ltr.toLowerCase());
    msgDict[key].shiftedLetter = numberToLetterShift(msgDict[key].num, shift);
    if (msgDict[key].upperCase === true) {
      msgDict[key].shiftedLetter = msgDict[key].shiftedLetter.toUpperCase();
    }
    msgArrayShifted.push(msgDict[key].shiftedLetter);
  }

  return msgArrayShifted.join("");
}

function letterToNumber(ltr) {
  for (const key in alphabet) {
    if (alphabet[key] === ltr) {
      return Number(key);
    }
  }
}

function numberToLetterShift(num, shift) {
  let numShift = num + shift;
  if (numShift >= 26) {
    numShift = numShift - 26;
  }
  return alphabet[numShift];
}
