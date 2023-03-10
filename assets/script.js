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
const textPhoto = document.querySelector(".slider-text")


// arrowLeft.addEventListener("click", () => {
// 	if (counter === 0) {
// 		image.src = "./assets/images/slideshow/" + slides[slidesImg - 1].image;
// 		textPhoto.innerHTML = slides[slidesImg - 1].tagLine;
// 		counter = slidesImg - 1

// 	} else {
// 		image.src = "./assets/images/slideshow/" + slides[counter - 1].image;
// 		textPhoto.innerHTML = slides[counter - 1].tagLine;
// 		counter = counter - 1
// 	}
// });

// arrowRight.addEventListener("click", () => {
// 	if (counter === slidesImg - 1) {
// 		image.src = "./assets/images/slideshow/" + slides[0].image;
// 		textPhoto.innerHTML = slides[0].tagLine;
// 		counter = 0
// 	} else {
// 		image.src = "./assets/images/slideshow/" + slides[counter + 1].image;
// 		textPhoto.innerHTML = slides[counter + 1].tagLine;
// 		counter = counter + 1
// 	}
// })

arrowLeft.addEventListener("click", () => {
	counter = counter === 0 ? slidesImg - 1 : counter - 1;
	image.src = `./assets/images/slideshow/${slides[counter].image}`;
	textPhoto.innerHTML = slides[counter].tagLine;
});

arrowRight.addEventListener("click", () => {
	counter = counter === slidesImg - 1 ? 0 : counter + 1;
	image.src = `./assets/images/slideshow/${slides[counter].image}`;
	textPhoto.innerHTML = slides[counter].tagLine;
});




