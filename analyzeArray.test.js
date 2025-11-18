import { analyzeArray } from "./analyzeArray";

const inputArray = [1, 8, 3, 4, 2, 6];

test("array average", () => {
  expect(analyzeArray(inputArray)["average"]).toEqual(4);
});

test("array min", () => {
  expect(analyzeArray(inputArray)["min"]).toEqual(1);
});

test("array max", () => {
  expect(analyzeArray(inputArray)["max"]).toEqual(8);
});

test("array length", () => {
  expect(analyzeArray(inputArray)["length"]).toEqual(6);
});

test("total object array", () => {
  expect(analyzeArray(inputArray)).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
