import { ticketsList } from './components/ticketsList';
/*import { createCart } from './components/cart'; */

import './style.css';

const appDiv = document.getElementById('app');

const containerDiv = document.createElement('div');

containerDiv.setAttribute('id', 'container');
containerDiv.classList.add('d-flex');

const ticketsUl = ticketsList();
const cart = createCart();

containerDiv.append(ticketsUl, cart);

appDiv.appendChild(containerDiv);
