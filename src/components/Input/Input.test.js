import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../test/utils';
import Input from './Input';

const setup = customProps => {
  const defaultProps = {
    secretWord: 'hello'
  };

  return shallow(<Input {...defaultProps} {...customProps} />)
}

describe('Input component tests', () => {
  it('renders without error', () => {
    const input = setup();
    expect(input.length).toBe(1)
  });

  it('state updates with valur of input box upon change', async () => {
    // mocking the useState hook
    // in the actual component it is being used like:
    // [currentGuess, setCurrentGuess] = React.useState('');

    // Mocking to create an spy
    const mockSetCurrentGuess = jest.fn();
    // Mocking to change the useState method
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);

    const input = setup();
    const inputField = await findByTestAttr(input, 'input-box');

    // mocking the value for the onChange event
    const mockEvent = { target: { value: "train" } };
    inputField.simulate('change', mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledTimes(1);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });
});