// Detecting Button Press //

document.querySelectorAll(".drum").forEach(item => { // 'item =>' is arrow function equivalent of annonymous function 'function(item)'
  item.addEventListener("click", function() { // use annonymous (or named) function instead of arrow function for correct 'this' value (ie 'this' = 'item')
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
});

// Detecting Keyboard Press //

document.addEventListener("keydown", event => {
  makeSound(event.key);
  buttonAnimation(event.key);
});

// Additional Notes on Function Notation //
// For annonymous functions: '() =>' === 'function()' and also 'a => a + 10;' === 'function(a) {return a + 10;}'
// For named functions: 'function bob(a) {return a + 10;}' === 'let bob = a => a + 10;'

function makeSound(key) {

  switch (key) {
    case "w":

      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":

      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":

      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":

      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":

      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":

      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":

      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    default:

  };
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  if (activeButton != null) {
    activeButton.classList.add("pressed");
    setTimeout(() => activeButton.classList.remove("pressed"), 100);
  } else {
    var gameOver = document.querySelector("body");
    gameOver.classList.add("game-over");
    setTimeout(() => gameOver.classList.remove("game-over"), 100);
  };

}
