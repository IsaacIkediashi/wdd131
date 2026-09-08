const currentYear = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastModified');

const mainnav = document.querySelector('nav');
const album = document.querySelector('#album');
const hambutton = document.getElementById('menu');
const header = document.querySelector('header');

const dateTime = new Date();

currentYear.textContent = dateTime.getFullYear();

lastModified.textContent = `Last Modification: ${document.lastModified}`;

hambutton.addEventListener('click', () => {
mainnav.classList.toggle('show');
hambutton.classList.toggle('show');
album.classList.toggle('show');
header.classList.toggle('show');
});

