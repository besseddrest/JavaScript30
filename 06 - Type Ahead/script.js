// list of cities, population on github
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

// fetch returns raw data, .json method converts it to JSON
// then we push the spread to the cities array
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data))

// filters all cities and states by input value
function findMatches(input, cities) {
  // returns new array
  return cities.filter(place => {
    const regex = new RegExp(input, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  })
}

// found on stackoverflow, inserts commas into our population number
function numbersWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  // returns the filtered cities array
  const matchArray = findMatches(this.value, cities);
  // creates an array of <li> elements that we join as one large string
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numbersWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');
  // insert into our <ul> element
  suggestions.innerHTML = html;
}

// get the search and suggestions elemnents
const search = document.querySelector(`.search`);
const suggestions = document.querySelector(`.suggestions`);

// run displayMatches on change and keyup
search.addEventListener('change', displayMatches);
search.addEventListener('keyup', displayMatches);
