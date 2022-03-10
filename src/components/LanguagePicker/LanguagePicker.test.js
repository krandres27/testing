import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr } from '../../test/utils'
import LanguagePicker from './LanguagePicker'

const mockedSetLanguage = jest.fn()

const wrapper = shallow(<LanguagePicker setLanguage={mockedSetLanguage} />);

it('Renders without error', async () => {
  const languageContainer = await findByTestAttr(wrapper, 'language-picker-container');
  expect(languageContainer.length).toEqual(1);
});

it('Renders language buttons', async () => {
  const languageIcons = await findByTestAttr(wrapper, 'language-icon');
  expect(languageIcons.length).toBeGreaterThan(0);
});

it('calls setLanguage prop upon click', async () => {
  const languageIcons = await findByTestAttr(wrapper, 'language-icon');
  const individualLanguageIcon = languageIcons.first();
  individualLanguageIcon.simulate('click');
  expect(mockedSetLanguage).toBeCalled();
});
