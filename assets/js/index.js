// LOAD ANIMATION

const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
        }
    });
};

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
};

const observer = new IntersectionObserver(handleIntersection, options);

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach(element => {
    observer.observe(element);
});

// BOTAO MENU MOBILE

const navIcon = document.getElementById('nav-icon4');
const menuMobile = document.getElementsByClassName('mobile-menu');

console.log(menuMobile);

navIcon.addEventListener('click', function() {
  this.classList.toggle('open');
  if (menuMobile.length > 0) {
    menuMobile[0].classList.toggle('mobile-menu--open');
  }
});
