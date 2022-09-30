// Menu Icon
let menuIcon = document.querySelector("#menu-icon");
menuIcon.addEventListener("click", sidemenu);
function sidemenu() {
  let sidenav = document.querySelector("#sidenav");
  let overlay = document.querySelector("#overlay");
  sidenav.style.display = "block";
  overlay.style.display = "block";
  document.querySelector("body").style.overflowY = "hidden";
}

// <===========================================>
//Cross logo
let crosslogo = document.querySelector("#crosslogo");
crosslogo.addEventListener("click", closeSideMenu);
function closeSideMenu() {
  let sidenav = document.querySelector("#sidenav");
  let overlay = document.querySelector("#overlay");
  sidenav.style.display = "none";
  overlay.style.display = "none";
  document.querySelector("body").style.overflowY = "scroll";
}

// Overlay
let overlay = document.querySelector("#overlay");
overlay.addEventListener("click", closeSideMenu);

// <===========================================>
// dropdown menu
let dropdownLi = document.querySelector("#dropdownLi");
let dropdownmenuout = document.querySelector("#dropdown");
dropdownLi.addEventListener("mouseover", dropdown);
function dropdown() {
  let dropdownmenu = document.querySelector("#dropdown");
  dropdownmenu.style.display = "block";
}
dropdownmenuout.addEventListener("mouseout", dropdownOut);
function dropdownOut() {
  let dropdownmenu = document.querySelector("#dropdown");
  dropdownmenu.style.display = "none";
}
dropdownLi.addEventListener("mouseout", dropdownOut);
function dropdownOut() {
  let dropdownmenu = document.querySelector("#dropdown");
  dropdownmenu.style.display = "none";
}

// <===========================================>
// <---------sidenav-extract------------>
// sidenav
let countUl = 0;
function handleSidenavExtract(val) {
  if (countUl == 0) {
    console.log("in");
    document.querySelector(`.list-${val} ul`).style.display = "block";
    document.querySelector(`.list-${val} #downArrow`).style.display = "none";
    document.querySelector(`.list-${val} #downArrow-${val}`).style.display =
      "block";
    countUl = 1;
  } else {
    document.querySelector(`.list-${val} ul`).style.display = "none";
    document.querySelector(`.list-${val} #downArrow`).style.display = "block";
    document.querySelector(`.list-${val} #downArrow-${val}`).style.display =
      "none";

    countUl = 0;
  }
}
