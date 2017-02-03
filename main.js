var colors = [
  'rgb(255, 0, 0)',
  'rgb(255, 255, 0)',
  'rgb(255, 0, 255)',
  'rgb(0, 255, 255)',
  'rgb(0, 255, 0)',
  'rgb(0, 0, 255)'
];

var squares = document.querySelectorAll('.square');
var pickedColor = colors[3];

var rgbDisplay = document.querySelector('#rgbDisplay');
rgbDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //adding colors to squares
    squares[i].style.background = colors[i];
    //adding listeners to squares
    squares[i].addEventListener('click', function(){
       var clickedColor = this.style.background;
       if(clickedColor === pickedColor){
           console.log('You quessed it right');
       } else {
           console.log('Wrong');
       }
    });
}

