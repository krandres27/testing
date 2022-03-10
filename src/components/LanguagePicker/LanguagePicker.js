import React from 'react'

const languages = [
  { code: 'en', symbol: '🇺🇸' },
  { code: 'emoji', symbol: '😊' },
];

const LanguagePicker = ({ setLanguage }) => {
  return (
    <div data-test="language-picker-container">
      {languages.map(({ code, symbol }) => (
        <button onClick={() => setLanguage(code)} key={code} data-test="language-icon">
          {symbol}
        </button>
      ))}  
    </div>
  )
}

export default LanguagePicker
