const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const image = document.querySelector(".banner-img");
let counter = 0;
const slidesImg = slides.length;
const textPhoto = document.querySelector(".slider-text");
const dots = document.querySelectorAll(".dot");

arrowLeft.addEventListener("click", () => {
	counter = counter === 0 ? slidesImg - 1 : counter - 1;
	image.src = `./assets/images/slideshow/${slides[counter].image}`;
	textPhoto.innerHTML = slides[counter].tagLine;
	updateSlide()
});

arrowRight.addEventListener("click", () => {
	counter = counter === slidesImg - 1 ? 0 : counter + 1;
	image.src = `./assets/images/slideshow/${slides[counter].image}`;
	textPhoto.innerHTML = slides[counter].tagLine;
	updateSlide();
});

dots.forEach((dot, index) => {
	dot.addEventListener("click", () => {
		counter = index;
		updateSlide();
	});
});


function updateSlide() {
	image.src = `./assets/images/slideshow/${slides[counter].image}`;
	textPhoto.innerHTML = slides[counter].tagLine;
	dots.forEach((dot, key) => {
		console.log(key + ',' + counter);
		if (key === counter) {
			dot.classList.add("dot_selected");
		} else {
			dot.classList.remove("dot_selected");
		}
	});
}









