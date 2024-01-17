function openLetter(){
    let letter = document.getElementById("letter-open");
    let envelope = document.getElementById("closedSect");

    letter.style.display === "none" ? letter.style.display = "block" : letter.style.display = "none";

    letter.style.display === "block" ? envelope.style.display = "none" : envelope.style.display = "block";
}