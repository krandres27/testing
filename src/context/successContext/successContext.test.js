import React from 'react';
import { shallow, mount } from 'enzyme';
import successContext from './index';

// a functional component that calls useSuccess for the test
const FunctionalComponent = () => {
  successContext.useSuccess()
  return <div />
}

it('functional component throws an error, when is being used outside the SuccessProvider', () => {
  expect(() => {
    shallow(<FunctionalComponent />)
  }).toThrow('useSuccess must be used within a SuccessProvider')
})

it('functional component does not throw an error, when is wrapped SuccessProvider', () => {
  expect(() => {
    mount(
      <successContext.SuccessProvider>
        <FunctionalComponent />
      </successContext.SuccessProvider>
    );
  }).not.toThrow('useSuccess must be used within a SuccessProvider')
})
