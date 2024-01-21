function openLetter() {
    let letter = document.getElementById("letter-open");
    let envelope = document.getElementById("closedSect");

    let checkDisplay = window.getComputedStyle(letter).display;

    checkDisplay === "none" ? letter.style.display = "block" : letter.style.display = "none";
    letter.style.display === "block" ? envelope.style.display = "none" : envelope.style.display = "block";

}

function noti() {
    let notification = document.getElementById("notification");

    notification.style.opacity = 0;
}
  