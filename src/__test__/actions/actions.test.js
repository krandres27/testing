import actions from '../../actions';

describe('actions', () => {

  it('addToCart action must return the correct structure', () => {
    const payload = {
      id: '001'
    };

    const expected = {
      type: 'ADD_TO_CART',
      payload
    };

    expect(actions.addToCart(payload)).toEqual(expected);
  });

});