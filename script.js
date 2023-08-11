const btn = document.getElementById('menu');
const nav = document.getElementById('nav');

btn.addEventListener('click', menu);

function menu() {
    nav.classList.toggle('show');
    console.log(1);
}