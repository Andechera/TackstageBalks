let images = document.querySelectorAll('.book')
let elementContainer = document.querySelector('#list');
let mainContainer = document.querySelector('#container');
let links = document.querySelectorAll('.link');
let body = document.querySelector('body');

// ------------------ Changing The Background Color ----------------------------
const options = {
    root: null, // Osserva la viewport
    threshold: .5, // Carica l'immagine quando il 50% è visibile
};

const observerCallback = (entries) => {
    entries.forEach((entry)=> {
        let activeLink = document.querySelector(`#l-${entry.target.id}`);
        console.log(activeLink);
        if (entry.isIntersecting) {
            
            mainContainer.style.backgroundColor = `var(--color-${entry.target.name})`;
            activeLink.classList.add('active');
        } else {
            activeLink.classList.remove('active');
        }
    });
};

const observer = new IntersectionObserver(observerCallback, options);

images.forEach(image => {
    observer.observe(image);
});

// ------------------ Scrolling Smoothly ----------------------------

links.forEach(link => {
    link.addEventListener('click', () => {
        
        document.querySelector(`${link.name}`).scrollIntoView({
            behavior:'smooth'
        });
    
    })
})