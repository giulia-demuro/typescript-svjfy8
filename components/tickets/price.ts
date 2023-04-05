import { createText } from '../text';
import { createButton } from '../button';

export const createPrice = (options) => {
  const { price, onClick } = options;

  const priceDiv = document.createElement('div');

  const priceText = createText(`€${price}`, 'black', '1rem', 'h3', 'bold');
  const btn = createButton('Book now', 'blue-bg', onClick);

  priceDiv.classList.add('d-flex');
  priceDiv.classList.add('price');
  priceDiv.append(priceText, btn);

  return priceDiv;
};
