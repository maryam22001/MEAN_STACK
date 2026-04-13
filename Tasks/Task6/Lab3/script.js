let slideIndex = 1;
let intervalId = null;

function showSlidesManual(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    else if (n < 1) { slideIndex = slides.length }
    else { slideIndex = n }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function showSlides() {
    slideIndex++;
    showSlidesManual(slideIndex);
}

function plusSlides(n) {
    showSlidesManual(slideIndex + n);
}


function startSlideshow() {
    if (!intervalId) {
        intervalId = setInterval(showSlides, 2000);
    }
}


function stopSlideshow() {
    clearInterval(intervalId);
    intervalId = null;
}


showSlidesManual(slideIndex);