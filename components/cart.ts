import { createText } from './text';

export const createCart = () => {
  const cartDiv = document.createElement('div');

  const cartElements = document.createElement('div');
  cartElements.setAttribute('id', 'cart-elements');
  cartElements.classList.add('d-flex-col');

  const headerText = createText('Cart', 'white', '1.2rem', 'h3', 'bold');

  const totalText = createText('€0.00', 'white', '1.2rem', 'h3', 'bold');
  totalText.setAttribute('id', 'total');

  const cartHeader = document.createElement('div');
  cartHeader.append(headerText, totalText);
  cartHeader.classList.add('d-flex');
  cartHeader.setAttribute('id', 'cart-header');

  cartDiv.setAttribute('id', 'cart');
  cartDiv.append(cartHeader, cartElements);

  return cartDiv;
};
