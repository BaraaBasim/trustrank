import "./style.css";
import loadHome from "./home";
import loadCatalog from "./catalog";
function createHeader() {
  const header = document.createElement("header");
  const logoDiv = document.createElement("div");

  header.classList.add("header");
  logoDiv.classList.add("logo");

  header.appendChild(logoDiv);
  header.appendChild(createNav());

  return header;
}

function createNav() {
  const nav = document.createElement("nav");
  nav.classList.add("nav-bar");

  const mainBtn = document.createElement("button");
  mainBtn.classList.add("nav-btn");
  mainBtn.classList.add("active");
  mainBtn.textContent = "Main";

  mainBtn.addEventListener("click", () => {
    if (!mainBtn.classList.contains("active")) {
      deactivateBtns();
      mainBtn.classList.add("active");
      loadHome();
    }
  });

  const contactBtn = document.createElement("button");
  contactBtn.classList.add("nav-btn");
  contactBtn.textContent = "Contact us";
  contactBtn.addEventListener("click", () => {
    if (!contactBtn.classList.contains("active")) {
      deactivateBtns();
      contactBtn.classList.add("active");
      //   loadContact();
    }
  });

  const catalogBtn = document.createElement("button");
  catalogBtn.classList.add("nav-btn");
  catalogBtn.textContent = "Catalog";

  catalogBtn.addEventListener("click", () => {
    if (!catalogBtn.classList.contains("active")) {
      deactivateBtns();
      catalogBtn.classList.add("active");
      loadCatalog();
    }
  });

  nav.appendChild(mainBtn);
  nav.appendChild(catalogBtn);
  nav.appendChild(contactBtn);

  return nav;
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
}

function deactivateBtns() {
  const buttons = document.querySelectorAll(".nav-btn");
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  //   const copyright = document.createElement("p");
  //   copyright.textContent = `Copyright © ${new Date().getFullYear()} Baraa Basim`;

  //   const githubLink = document.createElement("a");
  //   githubLink.href = "https://github.com/baraabasim";

  //   const githubIcon = document.createElement("i");
  //   githubIcon.classList.add("fab");
  //   githubIcon.classList.add("fa-github");

  //   githubLink.appendChild(githubIcon);
  //   footer.appendChild(copyright);
  //   footer.appendChild(githubLink);

  const whatsapp = document.createElement("p");
  whatsapp.textContent = "WhatsApp: +123123123";
  const wechat = document.createElement("p");
  wechat.textContent = "WeChat: 123123123";

  footer.appendChild(whatsapp);
  footer.appendChild(wechat);
  return footer;
}

function initWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
  loadHome();
}

initWebsite();
