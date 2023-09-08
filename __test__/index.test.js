import reverse from '../src/index.js';

test('reverse', () => {
  expect(reverse('hello')).toEqual('lleh');
  expect(reverse('')).toEqual('');
});