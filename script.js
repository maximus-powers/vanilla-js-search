// Variables
let idList = [];
let cardList = [];


// Functions

// Listen for the search button to be clicked
const searchButton = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
searchButton.addEventListener('click', () => {
  let inputValue = searchInput.value;
  setIdList(data, inputValue);
  clearCards();
  addCards();
});

// Find inputValue in data.js file by itterating through the list's objects and keys
// Map ids of all objects with value found to a new list
function setIdList(data, value) {
  idList = [];
  for (let i = 1; i <= Object.keys(data).length; i++) {
    for (let key in data[i]) {
      if ((data[i][key].toString()).search(value) != -1) {
        idList.push(i);
      }
    }
  } 
  return idList; // Do I need to return this?
}

// Structure html element to be displayed with relevant data
// put this before card-body div to add an image: <img class="card-img-top" src="..." alt="Card image cap">
const buildLiteral = (i) => {
  cardList = [];
  for (let x = 0; x < i.length; x++) {
    const singleCard = 
    `<div id="${data[i[x]]}" class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${data[i[x]]['name']}</h5>
        <p class="card-text">${data[i[x]]['major']}</p>
        <p class="card-text">${data[i[x]]['institution']}</p>
        <p class="card-text">${data[i[x]]['grad_year']}</p>
        <a href="#" class="btn btn-primary">More</a>
        </div>
    </div>`;
    
    cardList.push(singleCard);
  }
  return cardList;
};

// Add cards from idList to html
function addCards() {
    let parent = document.getElementById('cardsGoHere');
    parent.insertAdjacentHTML('beforeend', buildLiteral(idList));
}

function clearCards() {
  let parent = document.getElementById('cardsGoHere');
  parent.innerHTML = '';
}