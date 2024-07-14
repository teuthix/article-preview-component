// import React from "react";
// import ReactDOM from "react-dom";
// import "./style.css";
// import App from "./App";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

shareBtn = document.querySelectorAll(".btn");
profile = document.querySelector(".default");
desktopShare = document.querySelector(".share-container");
clicked = document.querySelector(".clicked");
card = document.querySelector(".card");

let visibleBtn = shareBtn[0];
// console.log(card.scrollWidth);
visibleBtn.addEventListener("click", (e) => {
  if (card.scrollWidth >= 720) {
    console.log("works", desktopShare);
    desktopShare.classList.toggle("hidden");
  } else {
    if (profile.style !== "none") {
      profile.style.display = "none";
      clicked.style.display = "flex";
      visibleBtn = shareBtn[1];
    } else {
      console.log("second click");
    }
  }
});
