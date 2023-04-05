export const createTicket = (companyInfo, flightInfo, price, bookingInfo) => {
  const ticketElement = document.createElement('div');
  const mainInfo = document.createElement('div');

  const hr = document.createElement('hr');

  mainInfo.classList.add('main-info');
  mainInfo.classList.add('d-flex');
  mainInfo.append(companyInfo, flightInfo, price);

  ticketElement.append(mainInfo, hr, bookingInfo);
  ticketElement.setAttribute('class', 'ticket');

  return ticketElement;
};
