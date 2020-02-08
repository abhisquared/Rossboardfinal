// document.querySelector('button').addEventListener("click",doSomething);


for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll('button')[i].addEventListener("click", doSomething);
}

function doSomething() {
  var buttonPressed = this.innerHTML;
  makesound(buttonPressed);
}

document.addEventListener("keypress", keyfunc);

function keyfunc(event) {
  makesound(event.key);
}

function makesound(key) {
  switch (key) {
    case "w":
      var wdrum = new Audio("sounds/crash.mp3");
      wdrum.play();
      break;
    case "a":
      var adrum = new Audio("sounds/Single-yard-dog-woof.mp3");
      adrum.play();
      break;
    case "s":
      var sdrum = new Audio("sounds/Single-cow-moo.mp3");
      sdrum.play();
      break;
    case "d":
      var ddrum = new Audio("sounds/Doorbell-ring-ding-dong-sound.mp3");
      ddrum.play();
      break;
    case "j":
      var jdrum = new Audio("sounds/Glass-breaking-sound.mp3");
      jdrum.play();
      break;
    case "k":
      var kdrum = new Audio("sounds/Gun-laser-sound.mp3");
      kdrum.play();
      break;
    case "l":
      var ldrum = new Audio("sounds/Bomb-sound-effect.mp3");
      ldrum.play();
      break;

    default:

  }
}
