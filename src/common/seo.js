const ignoreList = [
  '',
  '=',
  '-',
  '>=',
  '-s',
  'the',
  'there',
  'by',
  'at',
  'and',
  'so',
  'if',
  'than',
  'but',
  'about',
  'in',
  'on',
  'the',
  'was',
  'for',
  'that',
  'said',
  'a',
  'or',
  'of',
  'to',
  'there',
  'will',
  'be',
  'what',
  'get',
  'go',
  'think',
  'just',
  'every',
  'are',
  'it',
  'were',
  'had',
  'i',
  'very',
  'be',
  'you',
  'want',
  'see',
  'even',
  "doesn't",
  'anything',
  'an',
  'is',
  'away',
  'right',
  'can',
  'your',
  'which',
  'using',
  'global',
  'pretty',
  'my',
  'as',
  'then',
  'work',
  'user',
  'this',
  'out',
  'big',
  'up',
  'after',
  'going',
  'when',
  'trying',
  'things',
  'with',
  'me',
  'make',
  'mode',
  'do',
  'little',
  'bang',
  'rolled',
];

const getSanitized = (text) => {
  //const sanitized = text.replace(/<[^>]*>?/gm, "");  https://stackoverflow.com/questions/822452/strip-html-from-text-javascript
  return text
    .replace(/<\/?[^>]+(>|$)/g, '') // https://stackoverflow.com/questions/5002111/how-to-strip-html-tags-from-string-in-javascript
    .replace(/\r?\n|\r|/g, '') // line breaks
    .replace(/\./g, ' ');
};

const getWords = (text) => {
  return text.split(' ');
};

const getDistinctList = (words) => {
  return [...new Set(words)];
};

const getDesiredWords = (words) => {
  return words.filter((word) => !ignoreList.includes(word));
};

const getMostUsedWords = (words) => {
  return words
    .map((word) => {
      return {
        word: word.toLowerCase(),
        usage: words.filter((w) => w === word).length,
      };
    })
    .filter((word) => word);
};

const getOrderedList = (words) => {
  return words
    .sort((a, b) => (a.usage <= b.usage ? 1 : -1))
    .map((word) => word.word);
};

export const getKeywords = (text) => {
  const sanitized = getSanitized(text);
  const words = getWords(sanitized);
  const mostUsedWords = getMostUsedWords(words);
  const orderWords = getOrderedList(mostUsedWords);
  const desired = getDesiredWords(orderWords);
  const distinct = getDistinctList(desired);
  return distinct
    .filter((word) => word)
    .slice(0, 10)
    .join(',');
};

export const getTitle = (pageTitle, siteTitle) => {
  const suffix = siteTitle && ` - ${siteTitle}`;
  if (pageTitle.length + suffix.length <= 60) {
    return `${pageTitle}${suffix}`;
  }

  const title = pageTitle.substring(0, 60 - suffix.length - 3);
  return `${title}...${suffix}`;
};
