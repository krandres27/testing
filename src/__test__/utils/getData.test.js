import getData from '../../utils/getData';

describe('Fetch a resource', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('Call an API and serialize its response', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: 123 }));

    getData('apiurl')
      .then(res => {
        expect(res).toEqual({ data: 123 })
      });
  });
});