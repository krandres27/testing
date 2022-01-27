import React from 'react';
import { shallow, mount } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import Header from '../../components/Header';

describe('tests for Header component', () => {
  const setup = (customState = {}) => {
    return mount(
      <ProviderMock customState={customState}>
        <Header />
      </ProviderMock>
    );
  }

  it('Header component is rendering correctly', () => {
    const header = setup();
    expect(header.length).toEqual(1);
  });

  it('Renders the correct title', () => {
    const header = setup();
    const title = header.find('.Header-title').text()
    expect(title).toEqual('Platzi Store');
  });

  it('does not show the Header-alert if there are bit cart items', () => {
    const cart = [
      {
        'id': '1',
        'image': 'https://arepa.s3.amazonaws.com/camiseta.png',
        'title': 'Camiseta',
        'price': 25,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      },
    ];

    const header = setup({ cart });
    const headerAlert = header.find('.Header-alert');
    expect(headerAlert.length).toEqual(1);
  });
});