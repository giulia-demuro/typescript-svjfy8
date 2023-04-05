import { createText } from '../text.js';
import { calculateTravelTime } from '../../utils.js';

export const setFlightInfo = (options) => {
  const { depTime, depAirport, arrTime, arrAirport } = options;
  const flightDiv = document.createElement('div');

  const departure = document.createElement('div');
  const travelTime = document.createElement('div');
  const arrival = document.createElement('div');

  const depTimeText = createText(depTime, 'black', '1rem', 'p', 'bold');
  const depAirportText = createText(depAirport, 'black', '1rem', 'p', '400');
  const arrTimeText = createText(arrTime, 'black', '1rem', 'p', 'bold');
  const arrAirportText = createText(arrAirport, 'black', '1rem', 'p', '400');

  departure.append(depTimeText, depAirportText);
  arrival.append(arrTimeText, arrAirportText);

  const calculatedTime = calculateTravelTime(depTime, arrTime);

  const timeText = createText(
    `${calculatedTime.hours}h ${calculatedTime.minutes}m`,
    'grey',
    '.8rem',
    'p',
    '400'
  );
  travelTime.classList.add('travel-time');
  travelTime.appendChild(timeText);

  flightDiv.classList.add('d-flex');
  flightDiv.classList.add('flight-info');

  //const timeText = createText(`depTime`);
  flightDiv.append(departure, travelTime, arrival);

  return flightDiv;
};
