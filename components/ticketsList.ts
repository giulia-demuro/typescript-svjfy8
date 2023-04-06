import { flights } from '../data';
import { createTicket } from './ticket';
import { setCompanyInfo } from './tickets/companyInfo';
import { setFlightInfo } from './tickets/flightInfo';
import { setBookingInfo } from './tickets/bookingInfo';
import { createPrice } from './tickets/price';
import { addToCart } from '../state';
import { CompanyInfo, FlightInfo, BookingInfo, PriceInfo } from '../types';

export const ticketsList = () => {
  const tickets = document.createElement('div');
  tickets.setAttribute('id', 'tickets');
  tickets.setAttribute('class', 'd-flex-col');

  flights.forEach((item) => {
    const company: CompanyInfo = {
      companyName: item.companyName,
      companyLogo: item.companyLogo,
      aircraftType: item.aircraftType,
    };
    const companyInfo = setCompanyInfo(company);

    const flight: FlightInfo = {
      depTime: item.departureTime,
      depAirport: item.departureAirport,
      arrTime: item.arrivalTime,
      arrAirport: item.arrivalAirport,
    };
    const flightInfo = setFlightInfo(flight);

    const booking: BookingInfo = {
      flightClass: item.flightClass,
      passengers: item.passengers,
    };
    const bookingInfo = setBookingInfo(booking);

    const priceInfo: PriceInfo = {
      price: item.price,
      onClick: () => addToCart(item),
    };
    const price = createPrice(priceInfo);

    const ticket = createTicket(
      companyInfo,
      flightInfo,
      price,
      bookingInfo
    );
    ticket.setAttribute('id', String(item.price));

    tickets.appendChild(ticket);
  });

  return tickets;
};
