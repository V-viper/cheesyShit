document.addEventListener("DOMContentLoaded", function () {
  let randomX, randomY, randomZ;
  let ogBug, container;
  let cloneCount = 8;

  // Update Firefly position
  function randomPos(element) {
    randomX = Math.floor(Math.random() * window.innerWidth);
    randomY = Math.floor(Math.random() * window.innerHeight);
    randomZ = Math.floor(Math.random() * 700);
    
    element.style.transform = `translate3d(${randomX}px, ${randomY}px, ${randomZ}px)`;
  }

  function bugAnimation(element){
    element.animate([
      { opacity: 1 },
      { opacity: 0.8},
      { opacity: 0.5 },
      { opacity: 0 },
      { opacity: 0.5 },
      { opacity: 0.8},
    ], {
      duration: 8000,
      iterations: Infinity
    }
    );
  }
  // Create new Fireflies, apply initial positioning, change position in intervals
  function createAndMoveDiv() {
    ogBug = document.querySelector("#bug");
    container = document.body;

    let cloneBug = ogBug.cloneNode(true);
    container.appendChild(cloneBug);

    // Set initial position
    randomPos(cloneBug);

    setInterval(function () {
      randomPos(cloneBug);
      bugAnimation(cloneBug);

    }, Math.random() * 8000);

  }
  // Clone the div, apply positioning, and append it to the container
  for (let i = 0; i < cloneCount; i++) {
    createAndMoveDiv();
  }

});

function txtPopUp() {
  let txt = document.getElementsByClassName("txt-container");
  let txt2 = document.getElementsByClassName("txt-container2");

  let visibility = window.getComputedStyle(txt[0]).opacity;
  let visibility2 = window.getComputedStyle(txt2[0]).opacity;

  visibility === "0" ? txt[0].style.opacity = "1" : txt[0].style.opacity = "0";
  visibility2 === "0" ? txt2[0].style.opacity = "1" : txt2[0].style.opacity = "0";

}

function tooltipHi() {
  document.getElementById("tooltip").style.visibility = "visible";
}

function tooltipBye() {
  document.getElementById("tooltip").style.visibility = "hidden";
}