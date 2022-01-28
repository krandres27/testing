import moxios from 'moxios';
import { getSecretWord } from './index';

describe('getSecretWord', () => {
  beforeEach(() => {
    // in case an axios instance exists, it must be passed as an argument for the .install method
    moxios.install();
  });
  
  afterEach(() => {
    moxios.uninstall();
  });

  it('secret word is returned', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: 'party',
      });
    });

    return getSecretWord()
      .then(res => {
        expect(res).toBe('party')
      })
  });
});