let icon = document.getElementById("ico");
let ulEl = document.getElementById("ul");

icon.onclick = function () {
  icon.classList.toggle("open");
  if (icon.classList.contains("open") === true) {
    ulEl.style.display = "block";
  } else {
    ulEl.style.display = "none";
  }
};

/*************************************************************************** */

let btn = document.querySelector("#top");

btn.style.opacity = "0";

window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn.style.cssText = "opacity: 1; transition: all 0.3s ease-in-out;";
  } else {
    btn.style.cssText = "opacity: 0; transition: all 0.3s ease-in-out;";
  }
};

btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

/*****************************************************************************/

let step = document.querySelectorAll(".course .step"),
  courseI = document.querySelectorAll(".course h2 i");

// Course Course

courseI[0].onclick = function () {
  this.classList.toggle("open");
  if (courseI[0].classList.contains("open") === true) {
    courseI[0].classList.remove("fa-angle-down");
    courseI[0].classList.add("fa-angle-right");
    for (let i = 0; i <= 2; i++) {
      step[i].style.cssText = "display: block;";
    }
  } else {
    courseI[0].classList.add("fa-angle-down");
    courseI[0].classList.remove("fa-angle-right");
    for (let i = 0; i <= 3; i++) {
      step[i].style.cssText = "display: none;";
    }
  }
};

courseI[1].onclick = function () {
  this.classList.toggle("open");
  if (courseI[1].classList.contains("open") === true) {
    courseI[1].classList.remove("fa-angle-down");
    courseI[1].classList.add("fa-angle-right");
    for (let i = 3; i <= 10; i++) {
      step[i].style.cssText = "display: block;";
    }
  } else {
    courseI[1].classList.add("fa-angle-down");
    courseI[1].classList.remove("fa-angle-right");
    for (let i = 3; i <= 10; i++) {
      step[i].style.cssText = "display: none;";
    }
  }
};

courseI[2].onclick = function () {
  this.classList.toggle("open");
  if (courseI[2].classList.contains("open") === true) {
    courseI[2].classList.remove("fa-angle-down");
    courseI[2].classList.add("fa-angle-right");
    for (let i = 11; i <= 14; i++) {
      step[i].style.cssText = "display: block;";
    }
  } else {
    courseI[2].classList.add("fa-angle-down");
    courseI[2].classList.remove("fa-angle-right");
    for (let i = 11; i <= 14; i++) {
      step[i].style.cssText = "display: none;";
    }
  }
};

courseI[3].onclick = function () {
  this.classList.toggle("open");
  if (courseI[3].classList.contains("open") === true) {
    courseI[3].classList.remove("fa-angle-down");
    courseI[3].classList.add("fa-angle-right");
    for (let i = 15; i <= 40; i++) {
      step[i].style.cssText = "display: block;";
    }
  } else {
    courseI[3].classList.add("fa-angle-down");
    courseI[3].classList.remove("fa-angle-right");
    for (let i = 15; i <= 40; i++) {
      step[i].style.cssText = "display: none;";
    }
  }
};

/*************************************************************************************************************/
