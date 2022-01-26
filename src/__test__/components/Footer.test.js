import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const footer = mount(<Footer />);

  test('Footer component is rendering', () => {
    expect(footer.length).toEqual(1);
  });

  test('Footer\'s title is present', () => {
    const footer = mount(<Footer />);
    const titleText = footer.find('.Footer-title').text()
    expect(titleText).toEqual('Platzi Store');
  })
});