var colors = generateRandomColors(6);
var initialScore = 100;
var gameOver = false;

var squares = document.querySelectorAll('.square');
var pickedColor = randomColor();
var rgbDisplay = document.querySelector('#rgbDisplay');
var message = document.querySelector('#message');
var heading = document.querySelector('h1');
var playAgain = document.querySelector('.btns');
var score = document.querySelector('#score');

rgbDisplay.textContent = pickedColor;

//reset button
playAgain.addEventListener('click', function(){
    colors = generateRandomColors(6);
    pickedColor = randomColor();
    rgbDisplay.textContent = pickedColor;
    heading.style.background = 'steelblue';

    for(var i = 0; i < squares.length; i++){
        //adding colors to squares
        squares[i].style.background = colors[i];
    }

    message.textContent = '';
    playAgain.textContent = 'New Colors';

});

for(var i = 0; i < squares.length; i++){
    //adding colors to squares
    squares[i].style.background = colors[i];
    //adding listeners to squares
    squares[i].addEventListener('click', function(){
       var clickedColor = this.style.background;
       // won
       if(clickedColor === pickedColor && !gameOver){
           message.textContent = 'Hooray!!!';
           playAgain.textContent = 'Play Again?';

           for(var i = 0; i < squares.length; i++){
               squares[i].style.background = pickedColor;
           }

           heading.style.background = pickedColor;
           initialScore += 20;
           score.textContent = initialScore;

       //  try again
       } else if (initialScore === 20) {
            gameOver = true;
            alert('game over');
        } else {
           this.style.background = '#232323';
           message.textContent = 'Quess Again';
           initialScore -= 20;
           score.textContent = initialScore;
       }
    });
}

//picking up a random color
function randomColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


function generateRandomColors(num){
    var arr = [];

    for(var i = 0; i < num; i++){
        arr.push(randomColors());
    }

    return arr;
}

function randomColors(){
    //create red from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //create green
    var g = Math.floor(Math.random() * 256);
    //create blue
    var b = Math.floor(Math.random() * 256);
    //return concatenated string
    return 'rgb(' +r+ ', ' +g+ ', ' +b+ ')';
}