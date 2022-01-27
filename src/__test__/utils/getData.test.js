import getData from '../../utils/getData';

describe('Fetch a resource', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('Call an API and serialize its response', () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: 123 }));

    getData('apiurl')
      .then(res => {
        expect(res).toEqual({ data: 123 })
      });

    expect(fetchMock.mock.calls[0][0]).toEqual('apiurl');
  });
});