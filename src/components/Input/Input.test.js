import { mount } from 'enzyme';
import { findByTestAttr } from '../../test/utils';
import { successContext, guessedWordsContext } from '../../context';
import Input from './Input';

  // Mocking to create an spy
  const mockSetCurrentGuess = jest.fn();
  // Mocking to change the useState method, allowing to destructuring in the logic code
  // mocks the entire libray but only overrides the useState method
  jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: initialState => [initialState, mockSetCurrentGuess]
  }));

const setup = (success = false) => {
  return mount(
    <successContext.SuccessProvider value={[success, jest.fn()]}>
      <guessedWordsContext.GuessedWordsProvider>
        <Input secretWord="party" />
      </guessedWordsContext.GuessedWordsProvider>
    </successContext.SuccessProvider>
  );
}

describe('Input component tests', () => {
  let input;
  beforeEach(() => {
    input = setup();
  });

  afterAll(() => {
    mockSetCurrentGuess.mockClear();
    jest.mock('react', () => ({
      ...jest.requireActual('react'),
    }));
  })

  // it('renders without error', () => {
  //   expect(input.length).toBe(1)
  // });

  // it('state updates with value of input box upon change', async () => {
  //   // mocking the useState hook comes above
  //   // in the actual component it is being used like:
  //   // [currentGuess, setCurrentGuess] = useState('');
  //   const inputField = await findByTestAttr(input, 'input-box');

  //   // mocking the value for the onChange event
  //   const mockEvent = { target: { value: "train" } };
  //   inputField.simulate('change', mockEvent);

  //   expect(mockSetCurrentGuess).toHaveBeenCalledTimes(1);
  //   expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  // });
 
  it('state clears when submiting the word', async () => {
    const submitBtn = await findByTestAttr(input, 'submit-button');
    submitBtn.simulate('click', { preventDefault: () => null });

    expect(mockSetCurrentGuess).toHaveBeenCalledTimes(2);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  });
});

describe('conditional rendering', () => {
  it('hiddes input field and button and show congrats message when success is true', async() => {
    const input = setup(true);

    const inputField = await findByTestAttr(input, 'input-box');
    const submitBtn = await findByTestAttr(input, 'submit-btn');

    expect(inputField.exists()).toBeFalsy();
    expect(submitBtn.length).toBe(0);
  });
})