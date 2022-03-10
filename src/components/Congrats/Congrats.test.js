import { mount } from 'enzyme';
import { findByTestAttr } from '../../test/utils';
import Congrats from './Congrats';
import { languageContext, successContext } from '../../context';

const setup = (language = 'en', success = false) => {
  return mount(
    <languageContext.Provider value={language}>
      <successContext.SuccessProvider value={[success, jest.fn()]}>
        <Congrats />
      </successContext.SuccessProvider>
    </languageContext.Provider>)
}

describe('Congrats component tests', () => {
  it('renders without error', () => {
    const congrats = setup();
    expect(congrats.length).toEqual(1); 
  });
  
  it('renders no text when success is false', async() => {
    const congrats = setup();
    const successText = await findByTestAttr(congrats, 'congrats-message');
    expect(successText.length).toBe(0);
  });
  
  it('renders non-empty congrats message is success is true', async() => {
    const congrats = setup(null, true);
    const successText = await findByTestAttr(congrats, 'congrats-message');
    expect(successText.length).not.toBe(0);
  });
});

describe('language context and picker', () => {
  it ('must renders congrats message in english', async() => {
    const congrats = setup('en', true);
    const successText = await findByTestAttr(congrats, 'congrats-message');
    expect(successText.text()).toEqual('Congratulations! You guessed the word!')
  });
  
  it ('must renders congrats message in emoji', async() => {
    const congrats = setup('emoji', true);
    const successText = await findByTestAttr(congrats, 'congrats-message');
    expect(successText.text()).toEqual('🎯🎉')
  });
});