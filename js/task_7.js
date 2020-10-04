const fontSizeControler = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

function handleFontSizeChange(event) {
  fontSizeControler.setAttribute('min', 5);
  fontSizeControler.setAttribute('max', 50);
  text.setAttribute('style', `font-size: ${event.currentTarget.value}px`);
}
fontSizeControler.addEventListener('input', handleFontSizeChange);
