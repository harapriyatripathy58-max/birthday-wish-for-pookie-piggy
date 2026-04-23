const text = "Happy Birthday My Favorite Person 💖";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 80);
    } else {
        showCake();
    }
}

function showCake() {
    document.getElementById("cake").classList.remove("hidden");

    setTimeout(() => {
        document.getElementById("gift").classList.remove("hidden");
    }, 2000);
}

// Click → final message
document.addEventListener("click", function () {
    document.getElementById("final").classList.remove("hidden");
});

// Start
typeEffect();
