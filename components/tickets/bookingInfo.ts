import { createText } from '../text';

export const setBookingInfo = (options) => {
  const { flightClass, passengers } = options;
  const bookingDiv = document.createElement('div');
  bookingDiv.classList.add('booking-info');

  const classText = createText(flightClass, 'grey', '0.8rem', 'p', '400');
  const numAdults = createText(
    `${passengers} Adult${passengers > 1 ? 's' : ''}`,
    'grey',
    '0.8rem',
    'p',
    '400'
  );
  const details = createText('Flight Details', 'black', '0.8rem', 'p', 'bold');

  bookingDiv.append(classText, numAdults, details);
  bookingDiv.classList.add('d-flex');

  return bookingDiv;
};
