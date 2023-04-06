import { CompanyInfo } from '../../types';
import { createText } from '../text';
import { createLogo } from './logo';

export const setCompanyInfo = (options:CompanyInfo) => {
  const { companyName, companyLogo, aircraftType } = options;

  const companyInfoDiv = document.createElement('div');
  const logoDiv = document.createElement('div');
  const companyDiv = document.createElement('div');

  const logo = createLogo(companyName, companyLogo);

  const companyText = createText(companyName, 'black', '1rem', 'h3', '400');
  const aircraftText = createText(aircraftType, 'grey', '0.8rem', 'p', 'bold');

  logoDiv.appendChild(logo);
  companyInfoDiv.append(companyText, aircraftText);
  companyDiv.append(logoDiv, companyInfoDiv);

  companyDiv.classList.add('company-info');
  companyDiv.classList.add('d-flex');

  return companyDiv;
};
