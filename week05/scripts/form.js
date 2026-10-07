const currentYear = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastModified');

const dateTime = new Date();

currentYear.textContent = dateTime.getFullYear();

const selectProducts = document.querySelector('#products-list');

let reviewComplete = Number(localStorage.getItem("numReviews-ls")) || 0;

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

products.forEach(product => {
 const value = product["id"];
 const productName = product["name"];

 const option = document.createElement('option');
 option.value = value;
 option.textContent = `${productName}`;
 
 selectProducts.append(option);
})

reviewComplete++;

localStorage.setItem("numReviews-ls", reviewComplete);

console.log(reviewComplete);

lastModified.textContent =  `Last Modification: ${document.lastModified}`;