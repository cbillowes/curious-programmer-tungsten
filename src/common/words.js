const getWords = (text) => {
  const words = text.trim().split(' ');
  return words;
};

const truncateText = (originalWords, wordLimit) => {
  const truncated = originalWords.filter((_, index) => index <= wordLimit);
  return truncated;
};

const shouldTrailWithEllipsis = (originalWords, wordLimit) => {
  const shouldTrail = originalWords.length - 3 >= wordLimit;
  return shouldTrail;
};

const stitchTogether = (words, shouldTrail) => {
  const content = words.reduce((blurb, word) => `${blurb} ${word}`);
  const result = `${content}${shouldTrail ? '...' : ''}`;
  return result;
};

export const truncate = (text, wordLimit = 50) => {
  const words = getWords(text);
  const truncated = truncateText(words, wordLimit);
  const shouldTrail = shouldTrailWithEllipsis(words, wordLimit);
  const result = stitchTogether(truncated, shouldTrail);
  return result;
};
