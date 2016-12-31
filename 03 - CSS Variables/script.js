// listen for changes on any of the inputs
// get the value of the changed element
// update the vars in CSS
const spacing = document.getElementById('spacing');
const blur = document.getElementById('blur');
const base = document.getElementById('base');
const img = Array.from(document.getElementsByTagName('img'));
const highlight = Array.from(document.getElementsByClassName('highlight'));

// listen for input change on each individual element
spacing.addEventListener('input', function(e){
  updateStyles(e.target.value, img[0], 'padding');
});

blur.addEventListener('input', function(e){
  updateStyles(e.target.value, img[0], 'filter');
});

base.addEventListener('input', function(e){
  updateStyles(e.target.value, img[0], 'background');
  updateStyles(e.target.value, highlight[0], 'color');
});

// update CSS styles
function updateStyles(val, el, prop) {
  let value = '';
  switch (prop) {
    case 'padding':
      value = `${val}px`;
      break;
    case 'filter':
      value = `blur(${val}px)`;
      break;
    case 'background':
    case 'color':
      value = val;
      break;
    default:
      value = '';
  }

  el.style[prop] = value;
}

// Takeaways
// - LISTEN TO ALL INPUTS! document.querySelectorAll('.controls input')
// - apply the same event listener (for input) by
// document.documentElement.style.setProperty - lets you change the variables in the <style> text-align
// good job with template literals 
