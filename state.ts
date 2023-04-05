//import { refreshUI } from './utils';
import { Ticket, cart,  } from './types';

const cart:cart = {
  items: [],
  total: 0,
};

export const addToCart = (item: Ticket) => {
  if (cart.items.length === 2) {
    return alert('Remove a flight first!');
  }

  cart.items.push(item);
  cart.total += item.price;
  //refreshUI(item);
};

export const removeFromCart = (item: Ticket) => {
  cart.items = cart.items.filter((i) => i !== item);
  cart.total -= item.price;
  //refreshUI(item);
};

export const getCartItems = () => {
  return cart.items;
};

export const getTotal = () => {
  return cart.total;
};
