const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

var currentSlideNumber = 0;
const totalSlides = slides.length;

// Flèche gauche
let arrow_left = document.querySelector(".arrow_left"); // Récupère l'élément qui a la classe arrow_left
arrow_left.addEventListener("click", (e) => {	
	currentSlideNumber--;  // Décrémente le numéro de slide de -1
	if(currentSlideNumber < 0){
		currentSlideNumber = totalSlides-1; // Si le numéro de slide est < 0 => Va sur la dernière slide
	}
	updateSlider();  // Appelle la fonction qui met à jour image et texte
});

// Flèche droite
let arrow_right = document.querySelector(".arrow_right"); // Récupère l'élément qui a la classe arrow_right
arrow_right.addEventListener("click", (e) => {	
	currentSlideNumber++;  // Incrément le numéro de slide de +1
	if(currentSlideNumber > totalSlides-1){
		currentSlideNumber = 0; // Si le numéro de slide est < 0 => Va sur la première slide
	}
	updateSlider();  // Appelle la fonction qui met à jour image et texte
});

// Mise à jour de l'image et texte
function updateSlider() {
	// On récupère l'image par défaut par sa classe et on la remplace par la nouvelle image
	let bannerImg = document.querySelector(".banner-img");
	bannerImg.src = "./assets/images/slideshow/"+ slides[currentSlideNumber].image;
	//bannerImg.setAttribute("alt", i.tagLine);
	//alert(currentSlideNumber);
}



// On génère les dots
function createDots() {
	const dots = document.querySelector('.dots');
	for (i = 0; i < totalSlides; i++) {
		if(i === currentSlideNumber) {
			dots.innerHTML += `<span class='dot dot_selected ${currentSlideNumber}' id='${i}'></span>`;
		}
		else
		{
			dots.innerHTML += `<span class='dot ${currentSlideNumber}' id='${i}'></span>`;
		}
		
	}
}
createDots();