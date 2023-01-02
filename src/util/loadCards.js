const isColor = (colorString) => CSS.supports('color', colorString);

const setColor = (colorString) => {
  if (isColor(colorString)) {
    return colorString;
  }
  if (isColor(`#${colorString}`)) {
    return `#${colorString}`;
  }
  return 'black';
}

const parseCardString = (cardString) => {
  return cardString.replace(/\s/g, '').split('/').map((string) => {
    const [name, code, options, bg] = string.split(',');
    return {
      name,
      format: options === 'ean' ? 'EAN13' : '',
      backgroundColor: setColor(bg),
      code,
    };
  })
}

const loadCards = (providedCardString) => {
  let cardString = null;
  let cards = null;
  const urlParams = new URLSearchParams(window.location.search);

  if (window.localStorage.getItem('cardString')) {
    cardString = window.localStorage.getItem('cardString');
  }
  if (providedCardString) {
    cardString = providedCardString;
    window.localStorage.setItem('cardString', providedCardString);
  }
  if (urlParams.get('c')) {
    cardString = urlParams.get('c');
  }
  if (window.location.hash) {
    cardString = window.location.hash.substring(1);
  }

  if (cardString) {
    cards = parseCardString(cardString);
  }
  console.log('Loaded card config:', cards);

  return cards;
}

export default loadCards;