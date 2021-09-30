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

let loadingScreen = document.querySelector(".loader");

window.addEventListener("load", setTimeout(hideLoading, 2000));

function hideLoading() {
  loadingScreen.style.cssText = "opacity: 0; transition: all 1s ease-in-out;";
  setTimeout(() => (loadingScreen.style.cssText = "display: none;"), 1000);
}

/*************************************************************************** */

let html = document.querySelectorAll(".html .step"),
  //
  css = document.querySelectorAll(".css .step"),
  //
  js = document.querySelectorAll(".js .step"),
  //
  sass = document.querySelectorAll(".sass .step"),
  //
  htmlH2 = document.querySelector(".html h2 i"),
  //
  cssH2 = document.querySelector(".css h2 i"),
  //
  jsH2 = document.querySelector(".js h2 i"),
  //
  sassH2 = document.querySelector(".sass h2 i"),
  //
  n = 20;

// Course HTML

htmlH2.onclick = function () {
  //
  htmlH2.classList.toggle("open");
  //
  if (htmlH2.classList.contains("open") === true) {
    //
    htmlH2.classList.remove("fa-angle-down");

    htmlH2.classList.add("fa-angle-right");

    for (let i = 0; i <= n; i++) {
      //
      html[i].style.cssText = "display: block;";
      //
    }
    //
  } else {
    //
    htmlH2.classList.add("fa-angle-down");
    //
    htmlH2.classList.remove("fa-angle-right");
    //
    for (let i = 0; i <= n; i++) {
      //
      html[i].style.cssText = "display: none;";
      //
    }
    //
  }
  //
};

// Course CSS

cssH2.onclick = function () {
  //
  cssH2.classList.toggle("open");
  //
  if (cssH2.classList.contains("open") === true) {
    //
    cssH2.classList.remove("fa-angle-down");
    //
    cssH2.classList.add("fa-angle-right");
    //
    for (let i = 0; i <= n; i++) {
      //
      css[i].style.cssText = "display: block; transition: all 0.5s linear;";
      //
    }
  } else {
    //
    cssH2.classList.add("fa-angle-down");
    //
    cssH2.classList.remove("fa-angle-right");
    //
    for (let i = 0; i <= n; i++) {
      //
      css[i].style.cssText = "display: none; transition: all 0.5s linear;";
      //
    }
    //
  }
  //
};

// Course JS

jsH2.onclick = function () {
  //
  jsH2.classList.toggle("open");
  //
  if (jsH2.classList.contains("open") === true) {
    //
    jsH2.classList.remove("fa-angle-down");
    //
    jsH2.classList.add("fa-angle-right");
    //
    for (let i = 0; i <= n; i++) {
      //
      js[i].style.cssText = "display: block; transition: all 0.5s linear;";
      //
    }
  } else {
    //
    jsH2.classList.add("fa-angle-down");
    //
    jsH2.classList.remove("fa-angle-right");
    //
    for (let i = 0; i <= n; i++) {
      //
      js[i].style.cssText = "display: none; transition: all 0.5s linear;";
      //
    }
    //
  }
  //
};

// Course SASS

sassH2.onclick = function () {
  //
  sassH2.classList.toggle("open");
  //
  if (sassH2.classList.contains("open") === true) {
    //
    sassH2.classList.remove("fa-angle-down");
    //
    sassH2.classList.add("fa-angle-right");
    //
    for (let i = 0; i <= n; i++) {
      //
      sass[i].style.cssText = "display: block; transition: all 0.5s linear;";
      //
    }
  } else {
    //
    sassH2.classList.add("fa-angle-down");
    //
    sassH2.classList.remove("fa-angle-right");
    //
    for (let i = 0; i <= n; i++) {
      //
      sass[i].style.cssText = "display: none; transition: all 0.5s linear;";
      //
    }
    //
  }
  //
};

/*************************************************************************************************************/
