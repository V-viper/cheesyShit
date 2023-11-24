document.addEventListener('DOMContentLoaded', function () {
  
  // Function to update the position of a div diagonally in 3D space
  function randomPos(element) {
    var randomX = Math.floor(Math.random() * window.innerWidth);
    var randomY = Math.floor(Math.random() * window.innerHeight);
    var randomZ = Math.floor(Math.random() * 700);

    element.style.transform = `translate3d(${randomX}px, ${randomY}px, ${randomZ}px)`;
    
  }
  
  // Function to create a new div, apply positioning, and update its position at intervals
  function createAndMoveDiv() {
    var ogBug = document.querySelector('#bug');
    var container = document.body;
    
    var cloneBug = ogBug.cloneNode(true);
    container.appendChild(cloneBug);

    // Set initial position
    randomPos(cloneBug);
    
    // Update the position of each cloned div independently at intervals (e.g., every 4 seconds)
    setInterval(function () {
      randomPos(cloneBug);

    }, Math.random() * 8000); // Update every 4000 milliseconds (4 seconds)
  }

  var cloneCount = 8;

  // Clone the div, apply 3D diagonal positioning, and append it to the container
  for (var i = 0; i < cloneCount; i++) {
    createAndMoveDiv();
  }
});
