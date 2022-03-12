var myImages = ["images/Downy.jpeg", "images/Flicker.jpeg", "images/Goldfinch.jpeg", "images/Grosbeak.jpeg", "images/Heron.jpeg", "images/Jay.jpeg", "images/Kestrel.jpeg", "images/Starling.jpeg", "images/Turkeys.jpeg", "images/Waxwing.jpeg"]

var altImages = ["Downy Woodpecker", "Red Shafted Northern Flicker", "American Goldfinch", "Evening Grosbeak", "Great Blue Heron", "Western Scrub Jay", "American Kestrel", "European Starling", "Wild Turkeys", "Cedar Waxwing"]

var captionImages = ["Downy Woodpecker", "Red Shafted Northern Flicker", "American Goldfinch", "Evening Grosbeak", "Great Blue Heron", "Western Scrub Jay", "American Kestrel", "European Starling", "Wild Turkeys", "Cedar Waxwing"];

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