var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleDrumClick);
}

document.addEventListener("keypress", handleKeyPress);


/**
 * Handles the click event on a drum button.
 * It gets the button's inner HTML and triggers the sound and animation.
 */
function handleDrumClick() {
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

/**
 * Handles the keypress event for the document.
 * It gets the key that was pressed and triggers the sound and animation.
 * @param {KeyboardEvent} event - The keypress event object.
 */
function handleKeyPress(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
}


/**
 * Plays a sound based on the key pressed or button clicked.
 * @param {string} key - The key that was pressed or the innerHTML of the button that was clicked.
 */
function makeSound(key) {

  switch (key) {
    case "s":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "n":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "t":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "k":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "u":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "m":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


/**
 * Animates a button by adding and removing a "pressed" class.
 * This function also handles cases where a key is pressed that does not correspond to a button.
 * @param {string} currentKey - The key that was pressed or the innerHTML of the button that was clicked.
 */
function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  if (activeButton) {
    activeButton.classList.add("pressed");

    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}