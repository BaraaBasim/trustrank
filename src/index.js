import "./style.css";

function createHeader() {
  const header = document.createElement("div");
  header.classList.add("header");

  header.appendChild(createNav());

  return header;
}

function createNav() {
  const nav = document.createElement("nav");
  nav.classList.add("nav-bar");

  const mainBtn = document.createElement("button");
  mainBtn.classList.add("nav-btn");
  mainBtn.textContent = "Main";

  mainBtn.addEventListener("click", () => {
    if (!mainBtn.classList.contains("active")) {
      mainBtn.classList.add("active");
      //   loadMain();
    }
  });

  const contactBtn = document.createElement("button");
  contactBtn.classList.add("nav-btn");
  contactBtn.textContent = "Contact us";
  contactBtn.addEventListener("click", () => {
    if (!contactBtn.classList.contains("active")) {
      contactBtn.classList.add("active");
      //   loadContact();
    }
  });

  const catalogBtn = document.createElement("button");
  catalogBtn.classList.add("nav-btn");
  catalogBtn.textContent = "Catalog";

  catalogBtn.addEventListener("click", () => {
    if (!catalogBtn.classList.contains("active")) {
      catalogBtn.classList.add("active");
      //   loadCatalog();
    }
  });

  nav.appendChild(mainBtn);
  nav.appendChild(contactBtn);
  nav.appendChild(catalogBtn);

  return nav;
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  return main;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const copyright = document.createElement("p");
  copyright.textContent = `Copyright © ${new Date().getFullYear()} Baraa Basim`;

  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/baraabasim";

  const githubIcon = document.createElement("i");
  githubIcon.classList.add("fab");
  githubIcon.classList.add("fa-github");

  githubLink.appendChild(githubIcon);
  footer.appendChild(copyright);
  footer.appendChild(githubLink);

  return footer;
}

function initWebsite() {
  const content = document.getElementById("content");
  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
}

initWebsite();
