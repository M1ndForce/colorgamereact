let colors = generateRandomColors(6);
let squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorDisplay = document.getElementById('colorDisplay');
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset')
let easyBtn = document.querySelector('#easyBtn')
let hardBtn = document.querySelector('#hardBtn')

easyBtn.addEventListener('click', function(){
	h1.style.backgroundColor = '#3b3629';
	hardBtn.classList.remove('selected');
	easyBtn.classList.add('selected');
	colors = generateRandomColors(3);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.background = colors[i];
		}else {
			squares[i].style.display = 'none';
		}
	}
});

hardBtn.addEventListener('click', function(){
	window.location.reload();
});

resetButton.addEventListener('click', function(){
	if (colors.length != 3) {
    window.location.reload();
    }else {
    		h1.style.backgroundColor = '#3b3629';
    		colors = generateRandomColors(3);
			pickedColor = pickColor();
			colorDisplay.textContent = pickedColor;
			for (var i = 0; i < squares.length; i++) {
			if (colors[i]) {
			squares[i].style.background = colors[i];
			}else {
			squares[i].style.display = 'none';
		}
	  }
    }
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener('click', function() {
      let clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
      	messageDisplay.textContent = 'Correct';
      	changeColors(clickedColor);
      	h1.style.backgroundColor = clickedColor;
      } else {
      	this.style.backgroundColor = '#232323';
		  let message;
		  message.textContent = 'Try again';
      }
	});
}

function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
  }
}

function pickColor(){
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}q
function generateRandomColors(num){
	let arr =  [];
	for (var i = 0; i < num; i++) {
	 	arr.push(randomColor());
	 } 
	 return arr;
}
function randomColor(){
	let R = Math.floor(Math.random() * 256);
	let G = Math.floor(Math.random() * 256);
	let B = Math.floor(Math.random() * 256);
	return 'rgb(' + R +', ' + G + ', ' + B +')';
}