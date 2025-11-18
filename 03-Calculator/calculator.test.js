import { Calculator } from "./calculator";

const calc = new Calculator();

test("calculator object exists", () => {
  expect(calc).toBeTruthy();
});

test("add", () => {
  expect(calc.add(1, 1)).toBe(2);
});

test("subtract", () => {
  expect(calc.subtract(1, 1)).toBe(0);
});

test("divide", () => {
  expect(calc.divide(10, 5)).toBe(2);
});

test("divide float", () => {
  expect(calc.divide(10, 3.33)).toBeCloseTo(3);
});

test("multiply", () => {
  expect(calc.multiply(3, 5)).toBe(15);
});

test("multiply floats", () => {
  expect(calc.multiply(3.3, 5.7)).toBe(18.81);
});

test("multiply negatives", () => {
  expect(calc.multiply(-3, 5)).toBe(-15);
});
