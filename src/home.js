function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");
  const rightDiv = document.createElement("div");
  rightDiv.classList.add("right-home");
  const leftDiv = document.createElement("div");
  leftDiv.classList.add("left-home");
  const img = document.createElement("div");
  img.classList.add("img");
  rightDiv.appendChild(img);

  const header = document.createElement("h2");
  header.textContent = "IMPORT FROM CHINA";

  const p = document.createElement("p");
  p.textContent =
    "Door-to-door delivery, excellent service available in English, Arabic and Chinese We help you find the right product best value for your money";
  leftDiv.appendChild(header);
  leftDiv.appendChild(p);

  home.appendChild(leftDiv);
  home.appendChild(rightDiv);
  return home;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;
