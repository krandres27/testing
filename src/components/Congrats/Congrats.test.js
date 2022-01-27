import { shallow } from 'enzyme';
import { findByTestAttr } from '../../test/utils';
import Congrats from './Congrats';

const setup = customProps => {
  const defaultProps = {
    success: false
  };

  return shallow(<Congrats {...defaultProps} {...customProps} />)
}

describe('Congrats component tests', () => {
  it('renders without error', () => {
    const congrats = setup();
    expect(congrats.length).toEqual(1); 
  });
  
  it('renders no text when success props is false', async() => {
    const congrats = setup();
    const successText = await findByTestAttr(congrats, 'congrats-message');
    expect(successText.length).toBe(0);
  });
  
  it('renders non-empty congrats message is success prop is true', async() => {
    const congrats = setup({ success: true });
    const successText = await findByTestAttr(congrats, 'congrats-message');
    expect(successText.length).not.toBe(0);
  });
});