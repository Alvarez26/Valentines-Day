document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("response").innerText = "YAAAAAAAY! Now turn around and take your flowers Honey <3 🎉💖";
});

let noBtn = document.getElementById("noBtn");
let phrases = ["Oops you misclicked heheh", "Here let me help you, CLICK YES....hehehehe", "Bae what the fuck D:?"];
let count = 0;

noBtn.addEventListener("click", function() {
    alert("Oh, you misclicked! Try again sugarshitz <3");
    noBtn.innerText = phrases[count % phrases.length];
    count++;
});
