export const createLogo = (companyName: string, logoSrc: string) => {
  const logoImage = document.createElement('img');

  logoImage.src = logoSrc;
  logoImage.alt = companyName;
  logoImage.classList.add('logo');

  return logoImage;
};
