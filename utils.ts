import { removeFromCart, getCartItems, getTotal } from './state';
import { createCartElement } from './components/cartElement';
import { Ticket, CartElement } from './types';

export const refreshUI = (item: Ticket) => {
  refreshCartElements();

  const selectedElement = document.getElementById(String(item.price));
  selectedElement.classList.toggle('selected');
};

export const refreshCartElements = () => {
  const elements = getCartItems();

  const cartElements = document.getElementById('cart-elements');
  const totalText = document.getElementById('total');

  cartElements.innerHTML = '';

  elements.forEach((item) => {
    const cartElement = {
      depTime: item.departureTime,
      depAirport: item.departureAirport,
      arrTime: item.arrivalTime,
      arrAirport: item.arrivalAirport,
      price: item.price,
    };
    const newElement = createCartElement({
      ...cartElement,
      onclick: () => removeFromCart(item),
    });

    cartElements.appendChild(newElement);
  });

  totalText.innerText = `€ ${getTotal() || '0.00'}`;
};

export const calculateTravelTime = (departure: string, arrival: string) => {
  const dep = parseFloat(departure.replace(':', '.'));
  const arr = parseFloat(arrival.replace(':', '.'));
  const travelTime = String((arr - dep).toFixed(2));

  const [hours, minutes] = travelTime.split('.');
  return { hours, minutes };
};
