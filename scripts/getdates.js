const currentYear = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastModified');

const dateTime = new Date();

currentYear.textContent = dateTime.getFullYear();

lastModified.textContent =  `Last Modification: ${document.lastModified}`;