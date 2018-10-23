var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){	
	for(var i = 0; i < modeButton.length; i++){
		modeButton[i].addEventListener("click", function(){
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		});	
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){ 
		// add click listeners to square
		squares[i].addEventListener("click", function(){
			// grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			// compare color to pickedColor
			if(clickedColor === pickedColor){
					messageDisplay.textContent = "Correct!";
					h1.style.backgroundColor = clickedColor;
					changeColors(clickedColor);
					resetButton.textContent = "Play Again?";
			} else {
				this.style.backgroundColor = "#f1f1f1";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}	

function reset(){
	colors = generateRandomColors(numSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// display new colors to match picked color
	colorDisplay.textContent = pickedColor;
	// change color of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";	
}

resetButton.addEventListener("click", function(){
	reset();
});

function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color; 
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make and array
	var arr = [];
	// repeat num times
	for(var i = 0; i < num; i++){
		// generate random colors and push that into array
		arr.push(randomColors() );
	}
	// return that array
	return arr;
}


function randomColors(){
	// pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	// pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return `rgb(${r}, ${g}, ${b})`;
}

