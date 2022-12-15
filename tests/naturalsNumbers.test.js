function naturalNum (number) {
  if (number < 0) return 0;
  return [...Array(number).keys()]
    .filter(n => n % 3 === 0 || n % 5 === 0)
    .reduce((acc, num) => acc + num, 0)
}

test('10', () => {
  expect(naturalNum(10)).toBe(23);
});
