import { removeFromCart, getCartItems, getTotal } from './state';
import { createCartElement } from './components/cartElement';

export const refreshUI = (item) => {
  refreshCartElements();

  const selectedElement = document.getElementById(item.price);
  selectedElement.classList.toggle('selected');
};

export const refreshCartElements = () => {
  const elements = getCartItems();

  const cartElements = document.getElementById('cart-elements');
  const totalText = document.getElementById('total');

  cartElements.innerHTML = '';

  elements.forEach((item) => {
    const newElement = createCartElement({
      depTime: item.departureTime,
      depAirport: item.departureAirport,
      arrTime: item.arrivalTime,
      arrAirport: item.arrivalAirport,
      price: item.price,
      onclick: () => removeFromCart(item),
    });

    cartElements.appendChild(newElement);
  });

  totalText.innerText = `€ ${getTotal() || '0.00'}`;
};

export const calculateTravelTime = (departure, arrival) => {
  const dep = parseFloat(departure.replace(':', '.'));
  const arr = parseFloat(arrival.replace(':', '.'));
  const travelTime = String((arr - dep).toFixed(2));

  const splicedTime = travelTime.split('.');
  return { hours: splicedTime[0], minutes: splicedTime[1] };
};
