function getElementWidth(content, padding, border) {
  return parseFloat(content) + parseFloat(padding) * 2 + parseFloat(border) * 2;
}

//const nameInput = document.querySelector('#name-input');
//const nameOutput = document.querySelector('#name-output');
//nameInput.addEventListener('input', () => {
// const inputValue = nameInput.value.trim();
// nameOutput.textContent = inputValue === `` ? `Anonymous` : inputValue;
//});

const inputEl = document.querySelector('#name-input');

const userNameOutputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', event => {
  userNameOutputEl.textContent =
    event.currentTarget.value.trim() === ''
      ? 'Anonymus'
      : event.currentTarget.value.trim();
});
