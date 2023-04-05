export const createText = (
  text: string,
  color: string,
  size: string,
  tag: string,
  style: string
) => {
  const newText = document.createElement(tag);

  newText.style.color = color;
  newText.style.fontSize = size;
  newText.innerText = text;
  newText.style.fontWeight = style;

  return newText;
};
