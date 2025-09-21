// Get the button
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Show the button when the user scrolls down 20px from the top
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "flex";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

// Scroll to the top of the document when the button is clicked
scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});