const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const responseDiv = document.getElementById("response");
const imageContainer = document.getElementById("image-container");

// Phrases for the "No" button (in order)
const phrases = [
    "Wrong button honey hehehe",
    "Oop's you clicked the wrong button again bae bae",
    "Here's a hint my love... CLICK YES",
    "Bae what the fuck D: 😭",
    "HONEY WHAT YOU DOING",
    "Okokok no more NO button >:D"
];

let noClickCount = 0; // Track the number of clicks

// "Yes" button event listener
yesBtn.addEventListener("click", function () {
    responseDiv.innerHTML = "YAAAAAAY! 💖 I love you! Now turn around and take your flowers Honey";
    imageContainer.style.display = "block";
});

// "No" button event listener
noBtn.addEventListener("click", function () {
    if (noClickCount < phrases.length) {
        
        // Change the button text to the next phrase
        noBtn.innerText = phrases[noClickCount];
        noClickCount++; // Move to the next phrase
    } else {
        // On the 5th click, make the "No" button disappear
        noBtn.style.display = "none";
    }
});
