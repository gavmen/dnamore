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