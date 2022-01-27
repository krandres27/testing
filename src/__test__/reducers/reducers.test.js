import reducer from '../../reducers';

describe('test for the reducer', () => {
  it('should return initial state if no action is passed', () => {
    expect(reducer({}, {})).toEqual({});
  });

  it('ADD_TO_CART, must add a new element to the cart', () => {
    const initialState = {
      cart: []
    };

    const action = {
      type: 'ADD_TO_CART',
      payload: { id: '001' }
    }

    expect(reducer(initialState, action)).toEqual({ cart: [{ id: '001' }]})
  });

  it('REMOVE_FROM_CART, must remove an element from the cart', () => {
    const initialState = {
      cart: [{ id: '001' }, { id: '002' }]
    };

    const action = {
      type: 'REMOVE_FROM_CART',
      payload: { id: '001' }
    }

    expect(reducer(initialState, action)).toEqual({ cart: [{ id: '002' }]})
  });
});