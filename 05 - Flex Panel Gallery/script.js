// create an array of all the panels
const panels = Array.from(document.getElementsByClassName('panel'));

// toggle panel, toggle hamburger buns
panels.forEach((panel) => {panel.addEventListener('click', togglePanel)});
panels.forEach((panel) => {panel.addEventListener('transitionend', toggleBuns)});

// opens/closes the column
function togglePanel() {
  const classes = this.classList;

  classes.toggle('open');
}

// waits for the transition to end, then opens/closes the buns
function toggleBuns(e) {
  const classes = this.classList;

  // check for property name because two transitions are fired off: font-size and flex-grow
  if (e.propertyName.includes('flex')) {
    classes.toggle('open-active');
  }

}

// Takeaways
// you can run forEach() on elements retrieved by class name, query selector, tag name
// listen to transitionend instead of 'waiting' (setTimeout)
