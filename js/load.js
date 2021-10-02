let loadingScreen = document.querySelector(".loader");

window.addEventListener("load", setTimeout(hideLoading, 3000));

function hideLoading() {
  loadingScreen.style.cssText = "opacity: 0; transition: all 1s ease-in-out;";
  setTimeout(() => (loadingScreen.style.cssText = "display: none;"), 1000);
}
