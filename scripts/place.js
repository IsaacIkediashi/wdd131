const currentYear = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastModified');

const dateTime = new Date();

currentYear.textContent = dateTime.getFullYear();

lastModified.textContent = `Last Modification: ${document.lastModified}`;

const temperature = 24;
const windSpeed = 12;

function calculateWindChill(temperature, windSpeed) {
 return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
}

const windChill = document.querySelector('#windChill');

if (temperature <= 10 && windSpeed > 4.8) {
 windChill.textContent = `${calculateWindChill(temperature, windSpeed).toFixed(1)}°C`;
} else {
 windChill.textContent = 'N/A';
}