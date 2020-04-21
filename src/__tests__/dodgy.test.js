/* eslint-disable */

const { original, unOriginal } = require('../dodgy');

test('original', () => {
  expect(original(1)).toBe('positive');
  expect(original(-1)).toBe('negative');
  expect(original(0)).toBe('zero');
  expect(original('test')).toBe('console.log("you\'ve been pwned");');
});

test('unOriginal', () => {
  expect(unOriginal(1)).toBe('positive');
  expect(unOriginal(-1)).toBe('negative');
  expect(unOriginal(0)).toBe('zero');
});
