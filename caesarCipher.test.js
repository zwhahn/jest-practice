import { caesarCipher } from "./caesarCipher";

test("all lower case, no wrapping [1]", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("all lower case, no wrapping [2]", () => {
  expect(caesarCipher("jkl", 3)).toBe("mno");
});

test("all lower case, wrappinp", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("all UPPER case, no wrapping", () => {
  expect(caesarCipher("ABC", 3)).toBe("DEF");
});

test("all UPPER case, wrapping", () => {
  expect(caesarCipher("XYZ", 3)).toBe("ABC");
});

test("mIxEd CaSe", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});
