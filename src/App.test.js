import { render, screen } from '@testing-library/react';
import { mount } from 'enzyme';
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
