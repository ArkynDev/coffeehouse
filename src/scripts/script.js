const burger = document.getElementById('burger');
const navbar = document.getElementById('navbar');

burger.addEventListener('change', function() {
    if (burger.checked) {
        navbar.classList.add('active-navbar');
    } else {
        navbar.classList.remove('active-navbar');
    }
});

function onClickLink() {
    burger.checked = false;
    navbar.classList.remove('active-navbar');
}

document.addEventListener('mousedown', (event) => {
    if(burger.checked) {
        if(!navbar.contains(event.target) && !event.target.closest('.burger')) {
            burger.checked = false;
            navbar.classList.remove('active-navbar');
        }
    }
});