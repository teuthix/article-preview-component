shareBtn = document.querySelectorAll(".btn");
profile = document.querySelector(".default");
desktopShare = document.querySelector(".share-container");
mobileShare = document.querySelector(".clicked");
card = document.querySelector(".card");

let visibleBtn = shareBtn[0];

visibleBtn.addEventListener("click", (e) => {
  if (card.scrollWidth >= 720) {
    console.log("works", desktopShare);
    desktopShare.classList.toggle("hidden");
  } else {
    mobileShare.classList.toggle("hidden");
    profile.classList.toggle("hidden");
    visibleBtn = shareBtn[1];
    console.log("clicked", visibleBtn);
  }
});
