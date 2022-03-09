import React from 'react';
import { render, screen } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import { findByTestAttr } from './test/utils';
import App from './App';
// activate global mock to makse sure getSecretWord doesn't make network call
jest.mock('./actions');
import { getSecretWord as mockGetSecretWord } from './actions';

test('renders learn react link', () => {
  render(<App />);
  const titleElement = screen.getByText(/learn react testing/i);
  expect(titleElement).toBeInTheDocument();
});

const setup = () => {
  return mount(<App />);
}

describe('get secret word', () => {  
  beforeEach(() => {
    mockGetSecretWord.mockClear();
  })
  
  it.skip('getSecretWord on app mount', () => {
    const app = setup();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });
  
  it('getSecretWord does not run on app update', () => {
    const app = setup();
    app.setProps();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });
});

describe.each([
  [null, true, false],
  ["party", false, true],
])("renders", (secretWord, loadingShows, appShows) => {
  let wrapper;
  let originalUseReducer;

  beforeEach(() => {
    originalUseReducer = React.useReducer;

    const mockedUseReducer = jest.fn().mockReturnValue([
      { secretWord },
      jest.fn()
    ]);

    React.useReducer = mockedUseReducer;
    wrapper = shallow(<App />)
  });
  
  afterEach(() => {
    React.useReduce =  originalUseReducer;
  });
  
  it(`shows / hides the loading container when secret word is ${secretWord}`, async () => {
    const loadingContainer = await findByTestAttr(wrapper, 'loading-spinner')
    expect(loadingContainer.exists()).toBe(loadingShows)
  });
  
  it(`shows / hides the app container when secret word is ${secretWord}`, async () => {
    const appContainer = await findByTestAttr(wrapper, 'component-app');
    expect(appContainer.exists()).toBe(appShows)
  });
});
