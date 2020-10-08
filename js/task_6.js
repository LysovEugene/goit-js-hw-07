const input = document.querySelector('#validation-input');
const data = Number(input.dataset.length);
input.addEventListener('blur', handleCheckLength);

function handleCheckLength(event) {
  event.preventDefault();

  if (data === event.currentTarget.value.length) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}
