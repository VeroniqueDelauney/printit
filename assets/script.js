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
var dots = document.querySelector('.dots');
const totalSlides = slides.length;
const bannerImg = document.querySelector(".banner-img");

// 
let arrowsToListen = document.querySelectorAll("div.arrow");
if(arrowsToListen) {
	arrowsToListen.forEach(arrow => {
		arrow.addEventListener("click", () => {
			if(arrow.classList.contains("arrow_left")){
				currentSlideNumber--;  // Décrémente le numéro de slide de -1
				if(currentSlideNumber < 0){
					currentSlideNumber = totalSlides-1; // Si le numéro de slide est < 0 => Va sur la dernière slide
				}
			}
			else {
				currentSlideNumber++;  // Incrément le numéro de slide de +1
				if(currentSlideNumber > totalSlides-1){
					currentSlideNumber = 0; // Si le numéro de slide est < 0 => Va sur la première slide
				}
			}
			updateSlider();
		});		
	});
}

// Ajout des bullet points du slider
let createDot = '';
for (i = 0; i < totalSlides; i++) {
	createDot = "<span class='dot' data-num='"+ i +"'></span>";	
	dots.innerHTML += createDot;
}


let dotsToListen = document.querySelectorAll("span.dot");
if(dotsToListen) {
	dotsToListen.forEach(dot => {
		dot.addEventListener("click", () => {
			currentSlideNumber = dot.dataset.num;
			updateSlider();
		});		
	});
}



// Mise à jour de l'image et texte
function updateSlider() {

	let originalTagLine = slides[currentSlideNumber].tagLine; // On récupère le tagline de la bannière sélectionnée

	// Changement d'image	
	bannerImg.src = "./assets/images/slideshow/"+ slides[currentSlideNumber].image; // On récupère l'image par défaut par sa classe et on la remplace par la nouvelle image

	// Gestion des textes
	let alt = document.createElement("alt"); // On crée un attribut alt
	alt.innerHTML = originalTagLine; // On donne la valeur du tagline à l'attribut alt
	let formattedTagLine = alt.textContent; // On enlève les balises html de tagline avec "textContent"
	document.querySelector('.banner-img').alt = formattedTagLine; // On remplace le texte de l'attribut alt par le tagline sans balises

	// Gestion des dots
	let activeDot = document.querySelector("span.dot.dot_selected");
	if(activeDot) activeDot.classList.remove("dot_selected"); // Pas besoin de mettre acolades si if en ligne
	document.querySelector("span.dot[data-num='"+ currentSlideNumber +"']").classList.add("dot_selected");	


	// Changement du texte
	let message = document.querySelector("#banner p"); // On récupère le div de la bannière
	message.innerHTML = originalTagLine; // On affiche le contenu du tagline de chaque bannière

}
updateSlider();





// // Flèche gauche
// let arrow_left = document.querySelector(".arrow_left"); // Récupère l'élément qui a la classe arrow_left
// arrow_left.addEventListener("click", (e) => {	
// 	currentSlideNumber--;  // Décrémente le numéro de slide de -1
// 	if(currentSlideNumber < 0){
// 		currentSlideNumber = totalSlides-1; // Si le numéro de slide est < 0 => Va sur la dernière slide
// 	}
// 	updateSlider();  // Appelle la fonction qui met à jour image et texte
// });

// // Flèche droite
// let arrow_right = document.querySelector(".arrow_right"); // Récupère l'élément qui a la classe arrow_right
// arrow_right.addEventListener("click", (e) => {	
// 	currentSlideNumber++;  // Incrément le numéro de slide de +1
// 	if(currentSlideNumber > totalSlides-1){
// 		currentSlideNumber = 0; // Si le numéro de slide est < 0 => Va sur la première slide
// 	}
// 	updateSlider();  // Appelle la fonction qui met à jour image et texte	
// });


// Gestion des dots
// let dots = document.querySelector('.dots');
// let createDot = null;
// dots.innerHTML = null; // Redéfinir la variable à null pour éviter que les dots se concatène
// for (i = 0; i < totalSlides; i++) {
// 	createDot = "<span class='dot";
// 	if (i === currentSlideNumber) { 
// 		createDot += " dot_selected";
// 	}
// 	createDot += "'></span>";
// 	dots.innerHTML += createDot;
// }