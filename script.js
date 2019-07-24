var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var direction = document.querySelector('.deg');

function setGradient() {
	console.log(direction.value);
	if (direction.value) {
		console.log(direction.value);
		body.style.background = "linear-gradient(" + direction.value + 'deg' + ", " + color1.value +
			", " +
			color2.value +
			")";
	} else {
		body.style.background = "linear-gradient(" + 'to right' + ", " + color1.value +
			", " +
			color2.value +
			")";
	}
	css.textContent = "background: " + body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

direction.addEventListener('input', setGradient);