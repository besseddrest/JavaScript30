const inputs = Array.from(document.querySelectorAll('.inbox input[type="checkbox"]'));
let isShift = false;
let lastIndex = null;

function checkBoxes(event) {
  const thisIndex = inputs.indexOf(this);
  if (isShift) {
    const min = Math.min(thisIndex, lastIndex);
    const max = Math.max(thisIndex, lastIndex);
    // create a new array with all the inputs btwn
    // I think this is ok because the indexes are still referring to original object?
    let newInputs = [...inputs.slice(min + 1, max)];
    // check all these items
    newInputs.forEach(input => input.checked = true);
  }
  // when we're done, set this as the last input clicked
  lastIndex = thisIndex;
}
window.addEventListener('keydown', (e) => {
  if(e.shiftKey) {
    isShift = true;
  }
});
window.addEventListener('keyup', () => isShift = false);
inputs.forEach(input => input.addEventListener('change', checkBoxes));
