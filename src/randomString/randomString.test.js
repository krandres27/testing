const randomString = require('./randomString');
it('must return an string', () => expect(typeof randomString()).toBe('string'));
