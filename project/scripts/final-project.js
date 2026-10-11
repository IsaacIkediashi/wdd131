// Mobile navigation menu
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("show");
    menuButton.classList.toggle("show", isOpen);
    menuButton.setAttribute("aria-expanded", `${isOpen}`);
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });
}

// Shared footer details
const yearElement = document.querySelector("#currentyear");
if (yearElement) yearElement.textContent = `${new Date().getFullYear()}`;

const modifiedElement = document.querySelector("#lastModified");
if (modifiedElement) modifiedElement.textContent = `${document.lastModified}`;

// Destination category filtering
const filterSelect = document.querySelector("#destination-filter");
const destinationCards = [...document.querySelectorAll(".destination-card")];
const filterMessage = document.querySelector("#filter-message");

if (filterSelect && destinationCards.length) {
  const destinationData = destinationCards.map((card) => ({
    element: card,
    category: card.dataset.category,
    name: card.querySelector("h2")?.textContent ?? "Destination"
  }));

  const filterDestinations = () => {
    const category = filterSelect.value;
    let visibleCount = 0;
    destinationData.forEach((destination) => {
      const visible = category === "all" || destination.category === category;
      destination.element.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    if (filterMessage) {
      filterMessage.textContent = `${visibleCount} ${visibleCount === 1 ? "destination" : "destinations"} displayed.`;
    }
  };

  filterSelect.addEventListener("change", filterDestinations);
  filterDestinations();
}

// Favourites stored in localStorage
const favoriteButtons = [...document.querySelectorAll("[data-favorite]")];
const favoritesList = document.querySelector("#favorites-list");
const favoriteKey = "exploreNaijaFavorites";

const getFavorites = () => JSON.parse(localStorage.getItem(favoriteKey) || "[]");

const renderFavorites = () => {
  if (!favoritesList) return;
  const favorites = getFavorites();
  if (favorites.length === 0) {
    favoritesList.textContent = "You have not saved any destinations yet.";
    return;
  }
  favoritesList.textContent = `${favorites.join(", ")}.`;
};

if (favoriteButtons.length) {
  const favorites = getFavorites();
  favoriteButtons.forEach((button) => {
    const destinationId = button.dataset.favorite;
    const isSaved = favorites.includes(destinationId);
    button.classList.toggle("is-favorite", isSaved);
    button.textContent = isSaved ? "♥ Saved favourite" : "♡ Save favourite";

    button.addEventListener("click", () => {
      const currentFavorites = getFavorites();
      const alreadySaved = currentFavorites.includes(destinationId);
      const updatedFavorites = alreadySaved
        ? currentFavorites.filter((favorite) => favorite !== destinationId)
        : [...currentFavorites, destinationId];

      localStorage.setItem(favoriteKey, JSON.stringify(updatedFavorites));
      button.classList.toggle("is-favorite", !alreadySaved);
      button.textContent = alreadySaved ? "♡ Save favourite" : "♥ Saved favourite";
      renderFavorites();
    });
  });
  renderFavorites();
}

// Trip-planning form demo: validates and saves a summary locally.
// This is not a server submission and does not send email.
const tripForm = document.querySelector("#trip-form");
const tripFormMessage = document.querySelector("#trip-form-message");

if (tripForm && tripFormMessage) {
  tripForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!tripForm.checkValidity()) {
      tripForm.reportValidity();
      return;
    }

    const data = new FormData(tripForm);
    const tripPlan = {
      name: `${data.get("name")}`.trim(),
      destination: `${data.get("destination")}`,
      interest: `${data.get("interest")}`,
      savedAt: `${new Date().toLocaleString()}`
    };

    localStorage.setItem("exploreNaijaTripPlan", JSON.stringify(tripPlan));
    tripFormMessage.textContent = `Thank you, ${tripPlan.name}. Your interest in ${tripPlan.destination} has been saved in this browser.`;
    tripForm.reset();
  });
}
