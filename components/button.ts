export const createButton = (
  text: string,
  style: string,
  handleClick: () => void
) => {
  const newButton = document.createElement('button');
  newButton.innerText = text;
  newButton.classList.add(style);
  newButton.classList.add('button');
  newButton.addEventListener('click', handleClick);

  console.log(newButton.name);

  return newButton;
};
