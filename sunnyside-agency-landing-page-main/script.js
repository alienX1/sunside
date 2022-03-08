const Hamburger = document.querySelector('.hamburger');
const Navitems = document.querySelector('.Nav-items');

Hamburger.addEventListener('click', () => {
    Navitems.classList.toggle('Show');
})


// Hamburger.addEventListener('click', () => {
//     console.log("It works")
// })