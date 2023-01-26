const stringReverse = require('./reverse');

test('abcde is equal to edcba', () => {
  expect(stringReverse('abcde')).toBe("edcba");
});
