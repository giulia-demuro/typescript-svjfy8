export const createText = (text, color, size, tag, style) => {
  const newText = document.createElement(tag);

  newText.style.color = color;
  newText.style.fontSize = size;
  newText.innerText = text;
  newText.style.fontWeight = style;

  return newText;
};
