var myImages = ["images/Thrush.jpeg", "images/Cormorant.jpg"]

var altImages = ["Varied Thrush on a snowy tree", "Sihlouette of Double Crested Cormorant on the water."]

var captionImages = ["Varied Thrush", "Double Crested Cormorant"];

var index = 0;

function updateImage() {
    document.getElementById("slides").src = myImages[index];
    document.getElementById("slides").alt = altImages[index];
    document.getElementById("caption").textContent = captionImages[index];
}

function next() {
    if (myImages.length == index + 1)
        index = 0;
    else
        index++;
    updateImage();
}

function autoSlide() {
        next();
}


setInterval(autoSlide, 4000); // Next