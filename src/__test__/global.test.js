// toMatch
it('must contain mundo word', () => {
  const text = 'hola mundo';
  expect(text).toMatch(/mundo/)
});

// toContain
it('must contain an item inside an array', () => {
  const text = ['gato', 'perro', 'conejo'];
  expect(text).toContain('conejo');
});

// toBeGreaterThan
it('must be greather', () => expect(10).toBeGreaterThan(7));

// toBeTruthy
it('the value must be true', () => expect(true).toBeTruthy());

// Testing a callback
const stringReverse = (string, cb) => cb(string.split('').reverse().join(''));

it('must reverse an string', () => {
  stringReverse('hola', (reversedString) => {
    expect(reversedString).toBe('aloh');
  });
});

// Testing a promise - Async code
const stringReversePromise = string => {
  return new Promise((resolve, reject) => {
    if (!string) {
      reject('A param string is necessary');
    }

    resolve(string.split('').reverse().join(''));
  });
}

test('must return a promise with the reversed string', () => {
  return stringReversePromise('hola')
    .then(res => {
      expect(res).toBe('aloh');
    });
});

test('must return a promise with the reversed string - another way to test', () => {
  return expect(stringReversePromise('hola')).resolves.toBe('aloh');
});

test('must fail if string is not provided', () => {
  expect.assertions(1);
  return stringReversePromise()
    .catch(err => {
      expect(err).toMatch('A param string is necessary');
    });
});

test('must fail if string is not provided - another way to test', () => {
  return expect(stringReversePromise()).rejects.toMatch('A param string is necessary');
})

// Testing a promise - async/await

test('must return a promise with the reversed string - await approach', async() => {
  const result = await stringReversePromise('hola');
  expect(result).toBe('aloh');
});

test('must return a promise with the reversed string - await approach - another way', async() => {
  await expect(stringReversePromise('hola')).resolves.toMatch('aloh');
});

test('must fail if string is not provided - await approach', async () => {
  expect.assertions(1);
  try {
    await stringReversePromise();
  } catch(err) {
    expect(err).toMatch('A param string is necessary');
  }
});

test('must fail if string is not provided - await approach - another way', async () => {
  await expect(stringReversePromise()).rejects.toMatch('A param string is necessary');
})
