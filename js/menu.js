

// document.addEventListener('DOMContentLoaded', () => {
//     const hamburger = document.querySelector('.hamburger');
//     const navMenu = document.querySelector('nav ul');

//     hamburger.addEventListener('click', () => {
//         hamburger.classList.toggle('active'); // Toggle active state
//     });
// });

document.querySelector('.hamburger').addEventListener('click', function () {
    this.classList.toggle('active');
});
