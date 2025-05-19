const toggleBtn = document.getElementById('toggle');
const ulnav = document.getElementById('ulnav');
const main = document.getElementById('main')

toggleBtn.addEventListener('click', () => {
  ulnav.classList.toggle('active');
  main.classList.toggle('overlay')
})