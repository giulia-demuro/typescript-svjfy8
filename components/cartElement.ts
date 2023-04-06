import { createText } from './text';
import { createButton } from './button';
import { CartElement } from '../types';

export const createCartElement = (options: CartElement) => {
  const { depTime, depAirport, arrTime, arrAirport, price, onClick } = options;
  const flightInfo = document.createElement('div');
  const priceInfo = document.createElement('div');

  const cartElement = document.createElement('div');

  const departure = document.createElement('div');
  const arrival = document.createElement('div');

  const depTimeText = createText(depTime, 'grey', '.8rem', 'p', '400');
  const depAirportText = createText(
    depAirport,
    '#0d49c0',
    '.9rem',
    'p',
    'bold'
  );
  const arrTimeText = createText(arrTime, 'grey', '.8rem', 'p', '400');
  const arrAirportText = createText(
    arrAirport,
    '#0d49c0',
    '.9rem',
    'p',
    'bold'
  );

  departure.append(depAirportText, depTimeText);

  arrival.append(arrAirportText, arrTimeText);

  flightInfo.append(departure, '➔', arrival);
  flightInfo.classList.add('class', 'd-flex');
  flightInfo.classList.add('class', 'cart-flight-info');

  const priceDiv = document.createElement('div');

  const priceText = createText(`€ ${price}`, 'black', '1rem', 'p', 'bold');
  priceText.setAttribute('class', 'price-text');
  priceDiv.appendChild(priceText);

  const deleteButton = createButton(`✖`, 'delete', onClick);

  priceInfo.classList.add('cart-price-info');
  priceInfo.classList.add('class', 'd-flex-col');
  priceInfo.append(deleteButton, priceDiv);

  cartElement.classList.add('d-flex');
  cartElement.classList.add('cart-element');

  cartElement.append(flightInfo, priceInfo);

  return cartElement;
};
