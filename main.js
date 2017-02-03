var colors = [
  'rgb(255, 0, 0)',
  'rgb(255, 255, 0)',
  'rgb(255, 0, 255)',
  'rgb(0, 255, 255)',
  'rgb(0, 255, 0)',
  'rgb(0, 0, 255)'
];

var squares = document.querySelectorAll('.square');
var pickedColor = randomColor();
var rgbDisplay = document.querySelector('#rgbDisplay');
var message = document.querySelector('#message');
var heading = document.querySelector('h1');

rgbDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //adding colors to squares
    squares[i].style.background = colors[i];
    //adding listeners to squares
    squares[i].addEventListener('click', function(){
       var clickedColor = this.style.background;
       // won
       if(clickedColor === pickedColor){
           message.textContent = 'Hooray!!!';

           for(var i = 0; i < squares.length; i++){
               squares[i].style.background = pickedColor;
           }

           heading.style.background = pickedColor;
       //  try again
       } else {
           this.style.background = '#232323';
           message.textContent = 'Quess Again';
       }
    });
}

//picking up a random color
function randomColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}