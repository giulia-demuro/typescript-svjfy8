import { createText } from '../text';
import { createButton } from '../button';
import { PriceInfo } from '../../types';

export const createPrice = (options: PriceInfo) => {
  const { price, onClick } = options;

  const priceDiv = document.createElement('div');

  const priceText = createText(`€${price}`, 'black', '1rem', 'h3', 'bold');
  const btn = createButton('Book now', 'blue-bg', onClick);

  priceDiv.classList.add('d-flex');
  priceDiv.classList.add('price');
  priceDiv.append(priceText, btn);

  console.log(priceDiv);
  return priceDiv;
};
