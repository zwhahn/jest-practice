import { reverseString } from "./reverse-string";

test("cat", () => {
  expect(reverseString("cat")).toBe("tac");
});

test("car", () => {
  expect(reverseString("car")).toBe("rac");
});

test("space test", () => {
  expect(reverseString("race car")).toBe("rac ecar");
});
