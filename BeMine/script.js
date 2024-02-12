function bye() {
    const no = document.querySelector("#noBtn");

    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 30);

    no.style.position = "absolute";
    no.style.left = x + 'px';
    no.style.top = y + 'px';
}