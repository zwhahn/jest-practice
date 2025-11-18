import { capatalize } from "./capatalize";

test("John test", () => {
  expect(capatalize("john")).toBe("John");
});

test("Robert test", () => {
  expect(capatalize("robert")).toBe("Robert");
});

test("With a space", () => {
  expect(capatalize("robert runs")).toBe("Robert runs");
});

test("camelCase", () => {
  expect(capatalize("camelCase")).toBe("Camelcase");
});
