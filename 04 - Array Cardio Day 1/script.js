const links = Array.from(document.querySelectorAll('.mw-category a'));
const streets = [];

for (var i = 0; i < links.length; i++) {
  let link = links[i];
  if (link.title.indexOf(' de ') > -1){
    streets.push(link.title);
  }
}

console.log(streets);
