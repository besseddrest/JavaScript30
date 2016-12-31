// TODO Improvements
// - convert to ES6
// - target specific elements with document.querySelector()
// - listen for CSS transition to end, instead of setting a timeout
// - break into separate functions

// store elements
var allAudio = [].slice.call(document.getElementsByTagName('audio'));
var allKeys = [].slice.call(document.getElementsByClassName('key'));
var audio, key, keyCode = '';

document.onkeydown = function(e) {
  // when a key is pressed, store that number
  keyCode = e.keyCode;

  // find the elements that match this code
  audio = allAudio.find(matchDataKey);
  key = allKeys.find(matchDataKey);

  if (audio !== undefined) {
    // reset the time so we can instanly play the sound again
    audio.currentTime = 0;
    audio.play();
  }

  if (key !== undefined) {
    // create a new instance of this key
    // so we can add and remove classes regardless of how fast keys are pressed
    var keyInstance = key;
    keyInstance.classList.add('playing');
    setTimeout(function(){
      keyInstance.classList.remove('playing');
    }, 50);
  }
}

function matchDataKey(element) {
  return element.dataset.key == keyCode;
}

// Takeaways
// - you can find exactly the element you need! document.querySelector / document.querySelectorAll
// - cleaner to listen for the keydown event than rewrite the document's keydown event
// - you can key off the CSS transitionend - therefor no need to create new key instance, and remove class with setTimeout
