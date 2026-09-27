const currentYear = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastModified');

const mainnav = document.querySelector('nav');
const album = document.querySelector('.site-title');
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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Anchorage Alaska",
    location: "Anchorage, Alaska, United States",
    dedicated: "January 9, 1999",
    area: 13161,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/ef1d9b0a65b398d3d5aad2ccaad5aa79588b6cfd/full/640%2C/0/default"
  },
  {
    templeName: "Laie Hawaii Temple",
    location: "Laie, Hawaii, Unied States",
    dedicated: "November 27, 1919",
    area: 55600,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/809f567ccf240d2f1c8e457e8c81fbd94ef96759/full/640%2C/0/default"
  },
  {
    templeName: "Willamette Valley Oregon Temple",
    location: "Oregon, United States",
    dedicated: "June 7, 2026",
    area: 97477,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/rocapsqk10888pazjulr3klj7vb9n5ddlumz3pv7/full/640%2C/0/default"
  }
];

const templeCards = document.querySelector("#temple-cards");

function displayTemples(templesToDisplay) {

templeCards.innerHTML = "";

templesToDisplay.forEach((temple) => {

  const card = document.createElement("article");

  card.classList.add("temple-card");

  card.innerHTML = `
  <img
      src="${temple.imageUrl}"
      alt="${temple.templeName}"
      loading="lazy"
  >

  <h3>${temple.templeName}</h3>

  <p>
      <strong>Location:</strong>
      ${temple.location}
  </p>

  <p>
      <strong>Dedicated:</strong>
      ${temple.dedicated}
  </p>

  <p>
      <strong>Area:</strong>
      ${temple.area.toLocaleString()} sq ft
  </p>
  `;

  templeCards.appendChild(card);
 });
}

function getTempleYear(temple) {
  return Number(temple.dedicated.match(/\d{4}/)[0]);
}

document.querySelector("#home").addEventListener("click", () => {
 displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", () => {
 const oldTemples = temples.filter((temple) => {
  return getTempleYear(temple) < 1900;
 });

  displayTemples(oldTemples);
});

document.querySelector("#new").addEventListener("click", () => {
 const newTemples = temples.filter((temple) => {
  return getTempleYear(temple) > 2000;
 });

 displayTemples(newTemples);
});

document.querySelector("#large").addEventListener("click", () => {
 const largeTemples = temples.filter((temple) => {
  return temple.area > 90000;
 });

 displayTemples(largeTemples);
});

document.querySelector("#small").addEventListener("click", () => {
 const smallTemples = temples.filter((temple) => {
  return temple.area < 10000;
 });

 displayTemples(smallTemples);
});

displayTemples(temples);