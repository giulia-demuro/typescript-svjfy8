import { refreshUI } from './utils';
import { Ticket, Cart } from './types';

const cart: Cart = {
  items: [],
  total: 0,
};

export const addToCart = (item: Ticket) => {
  if (cart.items.length === 2) {
    return alert('Remove a flight first!');
  }

  console.log('add');

  cart.items.push(item);
  cart.total += item.price;
  refreshUI(item);
};

export const removeFromCart = (item: Ticket) => {
  cart.items = cart.items.filter((i) => i !== item);
  cart.total -= item.price;
  refreshUI(item);
};

export const getCartItems = (): Ticket[] => {
  return cart.items;
};

export const getTotal = (): number => {
  return cart.total;
};
