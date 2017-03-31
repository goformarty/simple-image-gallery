var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */

for (var i = 1; i<=5; i++) {
	var newImage = document.createElement('img');
	newImage.setAttribute('src', 'images/pic'+i+'.jpg');
	thumbBar.appendChild(newImage);


	newImage.onclick = function(e) {
		var imgSource = e.target.getAttribute('src');
		display(imgSource);
	}
}

function display (imgSource) {
	displayedImage.setAttribute('src', imgSource);
}




/* Wiring up the Darken/Lighten button */

