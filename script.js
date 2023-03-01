// When clicked, show the search field if hidden, or hide it if not
const input = document.querySelector('.input');
const container = document.querySelector('.search');
const searchButton = document.querySelector('.btn');

// function to show search field
function show() {
  container.classList.add('active');
}

// function to hide search field - revert the animation
function hide() {
  container.classList.remove('active');
}

// event listener - check if the search field is active or not and which handler should execute
searchButton.addEventListener('click', () => {
  if (container.classList.contains('active')) {
    hide();
  } else {
    show();
  }
});