export const getTitleElement = () => {
  const titleElem = document.querySelector('.title');
  console.dir(titleElem);
  return titleElem;
};
// getTitleElement();

export const getInputElement = () => {
  const inputElem = document.querySelector('input'); // .getAttribute('type', 'text');
  const textAtr = inputElem.getAttribute('type', 'text');
  console.dir(inputElem);
  if (textAtr) {
    console.dir(inputElem);
    return inputElem;
  }
  return false;
};

// getInputElement();
