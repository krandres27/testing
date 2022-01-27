import React from 'react';
import { mount } from 'enzyme';
import Product from '../../components/Product';

describe('tests for Product component', () => {
  const defaultProduct = {
    'id': '1',
    'image': 'https://arepa.s3.amazonaws.com/camiseta.png',
    'title': 'Camiseta',
    'price': 25,
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  };

  const setup = customProps => {
    const defaultProps = {
      product: defaultProduct,
      handleAddToCart: () => null
    };

    return mount(<Product {...defaultProps} {...customProps} />);
  }

  it('Product component is rendering correctly', () => {
    const product = setup();
    expect(product.length).toEqual(1);
  });
  
  it('should called handleAddToCard function', () => {
    const handleAddToCart = jest.fn();

    const product = setup({
      handleAddToCart,
    });

    product.find('button').simulate('click');
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
    expect(handleAddToCart).toHaveBeenCalledWith(defaultProduct);
  });
});