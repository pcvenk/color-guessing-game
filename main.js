var colors = generateRandomColors(6);
var initialScore = 100;
var gameOver = false;
var numSquares = 6;


var squares = document.querySelectorAll('.square');
var pickedColor = randomColor();
var rgbDisplay = document.querySelector('#rgbDisplay');
var message = document.querySelector('#message');
var heading = document.querySelector('h1');
var playAgain = document.querySelector('.btns');
var score = document.querySelector('#score');
var easyBtn = document.querySelector('#easy');
var hardBtn = document.querySelector('#hard');

rgbDisplay.textContent = pickedColor;

//hard button
hardBtn.addEventListener('click', function(){
    hardBtn.classList.add('selected');
    easyBtn.classList.remove('selected');

    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = randomColor();
    rgbDisplay.textContent = pickedColor;

    for(i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
        squares[i].style.display = 'block';
    }
});

//easy button
easyBtn.addEventListener('click', function(){
    easyBtn.classList.add('selected');
    hardBtn.classList.remove('selected');

    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = randomColor();
    rgbDisplay.textContent = pickedColor;

    for(i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }

});

//reset button
playAgain.addEventListener('click', function(){

        colors = generateRandomColors(numSquares);
        pickedColor = randomColor();
        rgbDisplay.textContent = pickedColor;
        heading.style.background = 'steelblue';

        for(var i = 0; i < squares.length; i++){
            //adding colors to squares
            squares[i].style.background = colors[i];
        }

        message.textContent = '';
        playAgain.textContent = 'New Colors';

        if(gameOver){
            initialScore = 100;
            score.textContent = 100;
        }

});

for(var i = 0; i < squares.length; i++){
    //adding colors to squares
    squares[i].style.background = colors[i];
    //adding listeners to squares
    squares[i].addEventListener('click', function(){
       var clickedColor = this.style.background;
       // won
       if(clickedColor === pickedColor && !gameOver){
           for(var i = 0; i < squares.length; i++){
               squares[i].style.background = pickedColor;
           }

           message.textContent = 'Hooray!!!';
           playAgain.textContent = 'Continue';

           heading.style.background = pickedColor;
           initialScore += 20;
           score.textContent = initialScore;

           console.log('Still PLaying');

       //  try again
       } else if (initialScore < 20) {
           gameOver = true;

           playAgain.textContent = 'Play Again?';
           message.textContent = 'Game Over';

           console.log('Game Over');

        } else {
           this.style.background = '#232323';
           message.textContent = 'Quess Again';
           initialScore -= 20;
           score.textContent = initialScore;

           console.log('Deducting');
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