const styles = `
.preview {
    width: 300px;
    height: 300px;
    border-radius: 8px;
    border: 3px dashed black;
  }

  .example-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    gap: 1rem;
    margin: 0 auto;
  }

  .example-grid-item {
    height: 80px;
    border-radius: 8px;
    background: #333;
    box-shadow: none;
  }
`

function debounce(fn, delay) {
  let debounceTimer;
  return function (...args) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => fn(...args), delay);
  }
}

function applyCss(styles) {
  console.log('applying...', styles);

  const existingStyles = document.querySelectorAll('head style');
  existingStyles.forEach(style => style.remove());

  const stylesheet = document.createElement('style');
  stylesheet.innerText = styles;
  document.head.appendChild(stylesheet);
}

const textarea = document.querySelector('.code')
textarea.value = styles;

textarea.addEventListener('keyup', debounce(() => applyCss(textarea.value), 500))
