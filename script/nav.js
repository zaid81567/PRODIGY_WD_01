const nav_el = document.getElementById("nav");
const logo_el = document.getElementById("logo");

setInterval(() => {
  if (Math.round(window.scrollY) > 100) {
    logo_el.style.color = "purple";
  } else {
    logo_el.style.color = "black";
  }
}, 200);
