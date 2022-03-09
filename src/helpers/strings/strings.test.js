import stringsModule from './strings'
const { getStringByLanguage } = stringsModule

const languageStrings = {
  en: {
   submit: 'Submit',
   matchingLettersColumnHeader: 'Matching Letters',
  },
  emoji: {
   submit: '🚀',
  }
}

it('returns correct submit string for english', () => {
  expect(getStringByLanguage('en', 'submit', languageStrings)).toBe('Submit');
})
it('returns correct submit string for emoji', () => {
  expect(getStringByLanguage('emoji', 'submit', languageStrings)).toBe('🚀');
})
it('returns english fallback when language does not exist', () => {
  expect(getStringByLanguage('nonExistinLanguage', 'submit', languageStrings)).toBe('Submit');
})
it('returns english fallback when translate does not exist', () => {
  expect(getStringByLanguage('emoji', 'matchingLettersColumnHeader', languageStrings)).toBe('Matching Letters');
})