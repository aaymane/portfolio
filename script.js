/* toggle icon navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
/* scroll section autive link */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
          // Loop through each anchor tag
          navLinks.forEach(link => {
              // Add click event listener to each anchor tag
              link.addEventListener('click', function() {
                  // Remove 'active' class from all anchor tags
                  navLinks.forEach(link => {
                      link.classList.remove('active');
                  });
                  // Add 'active' class to the clicked anchor tag
                  this.classList.add('active');
              });
          });


/* sticky navbar */
let header=document.querySelector('header');
header.classList.toggle('sticky',window.scrollY > 100);


/* scroll reveal */
ScrollReveal({ 
    //reset: true ,
    distance:'80px',
    duration:2000,
    delay:500,

});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/* typed js */
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Back-End developer', 'Web Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
// Fonction pour ouvrir la modal avec une animation
function openModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
  modal.classList.add("fadeIn");
}

// Fonction pour fermer la modal avec une animation
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.classList.remove("fadeIn");
  modal.classList.add("fadeOut");
  setTimeout(function() {
    modal.style.display = "none";
    modal.classList.remove("fadeOut");
  }, 500); // Délai de 0.5 seconde pour l'animation
}

// Ouvrir la modal lorsqu'on clique sur le bouton "Read more"
document.getElementById("openModal").addEventListener("click", openModal);

// Fermer la modal lorsque l'utilisateur clique sur le bouton de fermeture (x)
document.getElementsByClassName("close")[0].addEventListener("click", closeModal);

// Fermer la modal lorsque l'utilisateur clique en dehors de la modal
window.addEventListener("click", function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    closeModal();
  }
});
// Fonction pour ouvrir la modal avec une animation
function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    setTimeout(function() {
      modal.classList.add("show");
    }, 10); // Délai pour permettre le rendu initial avant l'animation
  }
  
  // Fonction pour fermer la modal avec une animation
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.classList.remove("show");
    setTimeout(function() {
      modal.style.display = "none";
    }, 500); // Durée de l'animation en millisecondes
  }
  
  // Ouvrir la modal lorsqu'on clique sur le bouton "Read more"
  document.getElementById("openModal").addEventListener("click", openModal);
  
  // Fermer la modal lorsque l'utilisateur clique sur le bouton de fermeture (x)
  document.querySelector(".close").addEventListener("click", closeModal);
  
  // Fermer la modal lorsque l'utilisateur clique en dehors de la modal
  window.addEventListener("click", function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
      closeModal();
    }
  });
  
  