document.addEventListener('DOMContentLoaded', function () {
  let randomX, randomY, randomZ;
  let ogBug, container;
  let cloneCount = 10;
  
  // Update Firefly position
  function randomPos(element) {
    randomX = Math.floor(Math.random() * window.innerWidth);
    randomY = Math.floor(Math.random() * (window.innerHeight - 300));
    randomZ = Math.floor(Math.random() * 700);

    element.style.transform = `translate3d(${randomX}px, ${randomY}px, ${randomZ}px)`;
  }
  
  // Create new Fireflies, apply initial positioning, change position in intervals
  function createAndMoveDiv() {
    ogBug = document.querySelector('#bug');
    container = document.body;
    
    let cloneBug = ogBug.cloneNode(true);
    container.appendChild(cloneBug);

    // Set initial position
    randomPos(cloneBug);
    
    setInterval(function () {
      randomPos(cloneBug);

    }, Math.random() * 8000); 
  }

  // Clone the div, apply positioning, and append it to the container
  for (let i = 0; i < cloneCount; i++) {
    createAndMoveDiv();
  }

});

function txtPopUp(){  
  var txt = document.getElementsByClassName('txt-container');
  var txt2 = document.getElementsByClassName('txt-container2');
   
  var op = 0;

  if(txt[0].style.opacity === "0"){
    txt[0].style.opacity = '1';
    txt2[0].style.opacity = '1';

  } else{
    txt[0].style.opacity = '0';
    txt2[0].style.opacity = '0';
  } 

}

function tooltipHi(){
  document.getElementById("tooltip").style.visibility = "visible";
}

function tooltipBye(){
  document.getElementById("tooltip").style.visibility = "hidden";
}