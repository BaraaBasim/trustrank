function createCatalog() {
  const CATEGORIES = [
    "Sweatshirts",
    "Beanies",
    "Polo",
    "Jeans",
    "Hoodies",
    "Jackets",
    "Skirts",
    "Scarfs",
    "Sportswear",
    "3D",
    "Kids",
    "Shorts",
  ];
  const NUMBER_OF_CATEGORIES = CATEGORIES.length;

  const catalog = document.createElement("div");
  catalog.classList.add("catalog");

  for (let i = 0; i < NUMBER_OF_CATEGORIES; i++) {
    const category = document.createElement("div");
    category.classList.add("category");
    category.textContent = `${CATEGORIES[i]}`;
    catalog.appendChild(category);
  }

  return catalog;
}

function loadCatalog() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createCatalog());
}

export default loadCatalog;
