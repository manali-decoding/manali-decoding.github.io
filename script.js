// add sticky nav
const nav = document.querySelector("#main");
let topOfNav = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + "px";
    document.body.classList.add("fixed-nav");
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
  }
}

window.addEventListener("scroll", fixNav);

const hamburgerBtn = document.querySelector(".hamburger-btn");
const navList = document.querySelector(".nav-list");

// hamburgerBtn.addEventListener("click", function () {
//   //   console.log("i clicked");
//   console.log(navList.classList.toggle(".nav-list"));
//   let openMenu = navList.classList.toggle(".nav-list");

//   if (openMenu === true) {
//     document.querySelector(".nav-list").checked = false;
//   }
//   //   navList.toggle();
// });

function hideMenu() {
  let openMenu = document.querySelector("#check").ariaChecked;

  if (openMenu === true) {
    document.querySelector("#check").checked = false;
  }
}

window.addEventListener("scroll", hideMenu);

// close hamburger menu
function hideMenu() {
  let menuOpen = document.querySelector("#check").checked;

  if ((menuOpen = true)) {
    document.querySelector("#check").checked = false;
  }
}

window.addEventListener("scroll", hideMenu);
