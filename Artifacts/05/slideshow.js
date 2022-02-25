var myImages = ["images/Tilde.jpg", "images/Oedi.jpg", "images/Ferrets.jpg", "images/TJ.jpg", "images/Rummy.jpg", "images/Luna.jpg"];

var altImages = ["Black and White Long Haired Cat", "Black Cat Scratching Couch", "Two Sleeping Ferrets", "Chihuahua Wearing Rainbow Scarf", "Gray Tabby Cat", "Red Golden Retriever"]

var captionImages = ["Tilde", "Oedipus", "Radagast & Strider", "TJ", "Rummy", "Luna"];

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


function back() {
    if (index === 0)
        index = myImages.length - 1;
    else
        index--;

    updateImage();
}

var nextButton = document.getElementById("next");
var previousButton = document.getElementById("back");

previousButton.addEventListener("click", back, false);
nextButton.addEventListener("click", next, false);

function autoSlide() {
    if (document.getElementById("auto").checked)
        next();
}


setInterval(autoSlide, 4000); // Next