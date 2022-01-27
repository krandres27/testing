const letterMatchCount = (guessedWord, secretWord) => {
  const secretWordLetters = secretWord.toLowerCase().split('');
  const matchedLettersSet = new Set(guessedWord)
  return secretWordLetters.filter(letter => matchedLettersSet.has(letter)).length;
}

export default letterMatchCount;
