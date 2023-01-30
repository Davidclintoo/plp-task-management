const hambergur = document.querySelector('.hambergur');
const nav_link = document.querySelector('.nav_link');

hambergur.addEventListener('click', () => {
   nav_link.classList.toggle('hide');
});
