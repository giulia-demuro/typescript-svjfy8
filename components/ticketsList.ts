import { flights } from '../data';
import { createTicket } from './ticket';
import { setCompanyInfo } from './tickets/companyInfo';
import { setFlightInfo } from './tickets/flightInfo';
import { setBookingInfo } from './tickets/bookingInfo';
import { createPrice } from './tickets/price'; 
import { addToCart } from '../state';
import { Ticket, CompanyInfo, FlightInfo, BookingInfo } from '../types';

export const ticketsList = () => {
  const tickets = document.createElement('div');
  tickets.setAttribute('id', 'tickets');
  tickets.setAttribute('class', 'd-flex-col');

  flights.forEach((item) => {
    const companyInfo = setCompanyInfo({
      companyName: item.companyName,
      companyLogo: item.companyLogo,
      aircraftType: item.aircraftType,
    });

    const flightInfo = setFlightInfo({
      depTime: item.departureTime,
      depAirport: item.departureAirport,
      arrTime: item.arrivalTime,
      arrAirport: item.arrivalAirport,
    });

    const bookingInfo = setBookingInfo({
      flightClass: item.flightClass,
      passengers: item.passengers,
    });

    const ticketId = item.price;

    const price = createPrice({
      price: item.price,
      onClick: () => addToCart(item),
    });
    const ticket = createTicket(companyInfo, flightInfo, price, bookingInfo);
    ticket.setAttribute('id', ticketId);

    tickets.appendChild(ticket);
  });

  return tickets;
};
