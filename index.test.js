import { add, toEqual, toThrow } from "./index";

test("should return a string say hello", () => {
  expect(add(1, 2)).toBe(3);
});

test("toEqual", () => {
  const name = { name: "alex" };
  expect(toEqual()).toEqual(name);
});

test("toBeNull", () => {
  const test = null;
  expect(test).toBeNull();
});

test("toBeUndefined", () => {
  const test = undefined;
  expect(test).toBeUndefined();
});

/**
 * Boolean
 */

test("toBeFalsey", () => {
  // 都会被匹配为 false
  // const test = false;
  // const test = null;
  const test = undefined;
  expect(test).toBeFalsy();
});

test("to be truthry ", () => {
  const test = true;
  expect(test).toBeTruthy();
});

/**
 * Not
 */
test("not", () => {
  const test = false;
  expect(test).not.toBeTruthy();
});

/**
 * number
 */
test("to be greater than", () => {
  const counter = 10;
  expect(counter).toBeGreaterThan(9);
});

test("to be less than", () => {
  const counter = 10;
  expect(counter).toBeGreaterThanOrEqual(10);
});

test("to be less than", () => {
  const counter = 10;
  expect(counter).toBeLessThanOrEqual(11);
});

/**
 * String
 */
test("toMatch", () => {
  // 是不是包涵
  expect("helloworld").toMatch("hello");
});

/**
 * Array
 */
test("to contain", () => {
  const arr = ["hello", "world"];
  expect(arr).toContain("hello");
});

/**
 * Throw
 * Note: 测试 toThrow 的时候，没有加括号
 * Have to match the content of the error message
 */
test("to throw", () => {
  expect(toThrow).toThrow('this is a error');
});
