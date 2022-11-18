import {
  data
} from './getData.js'

// Declearing Varialbles-----------------

// TAB (sorting by category)*************
const tabNav = document.querySelector(".tabs");
const tabs = tabNav.querySelectorAll(".tab");


const drinkList = document.getElementById('drinkList')
const searchBar = document.getElementById('searchBar')

searchBar.addEventListener('input', (e) => {
  const searchString = e.target.value.toLowerCase();
  const filtredDrinks = data.filter((drink) => {
    return drink.strDrink.toLowerCase().includes(searchString)
  })
  displayDrinks(filtredDrinks)
  addId()
})



const loadDrinks = () => {
  displayDrinks(data)
}


function displayDrinks(drinks) {
  const htmlString = drinks.map((drink) => {
    return `
    <li id="${drink.idDrink}" class="drinkLI">
    <p class="drinkCategory">${drink.strCategory}</p>   
    <img class="drinkIMG" src=${drink.strDrinkThumb}></img>
    <p class="drinkName">${drink.strDrink}</p>
    <p class="drinkPrice">Price: ${drink.strPrice}</p>
    <div class="divAddToCart">
    <button class="addToCart" id="addToCart">Add to Cart</button>
    </div>
    </li>
    `;
  }).join('');
  drinkList.innerHTML = htmlString

  if (drinks.length===0) {
    noResults()
  }
}

loadDrinks()

// Filter items---------------------------

tabs.forEach((li) => {
  li.addEventListener("click", filteredList);
});
let filtered = [];

function filteredList(e) {
  drinkList.innerHTML = "";
  console.log('hello')
  let category = e.target.id;
  console.log(category)
  if (category === "All") {
      filtered = data;
  } else {
      filtered = data.filter((item) => item.strCategory === category);
  }
  displayDrinks(filtered);
  addId();
}

function addId() {
  document.querySelectorAll('.drinkLI').forEach((each) => {
    each.addEventListener('click', () => {
      localStorage.setItem("id", each.id);
      localStorage.setItem("totalPriceInCart", totalInCart.innerText.replace('$', ''));
      localStorage.setItem("itemsNumInCart", itemsInCart.innerText);
      window.open("infoEachDrink.html", "_self");
      searchBar.value = ''
    })
  })
}

addId()


function noResults() {
  drinkList.innerHTML = `
  <li id="notFound" class="notFound">  
  <img src='https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-12188.jpg?size=338&ext=jpg'></img>
  <h1>Nothing found</h1>
 <p>Sorry, we couldn't find any results matching <span class="redSpan">"${searchBar.value}"</span></p>
 <p>Keep calm and search again. We have so many other product that you will like!</p>
 </li>
 `
}
const itemsInCart = document.querySelector('.itemsInCart')

const addToCartButtons = document.getElementsByClassName('addToCart')
for (let i=0; i<addToCartButtons.length; i++) {
    let button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)
}



let count = 0;
let total = 0;


const totalInCart = document.querySelector('.totalInCart')
function addToCartClicked(e) {
  e.stopPropagation()
  let button = e.target
  let shopItem = button.parentElement.parentElement
  count++
  itemsInCart.innerText = numItemWithLook+count ;

  const shoppedPrice = shopItem.getElementsByClassName('drinkPrice')[0]
  const noStringPrice1 = parseFloat(shoppedPrice.innerText.replace('Price: ', '').replace('$', ''))
  total=numTotalWithLook + total + noStringPrice1
  totalInCart.innerText ='$'+total
}

let totalPriceInCartFromMemory = localStorage.getItem("totalPriceInCart");
let itemsNumInCartFromMemory = localStorage.getItem("itemsNumInCart");



let numTotalWithLook = Number(totalPriceInCartFromMemory)
let numItemWithLook = Number(itemsNumInCartFromMemory)
console.log(numTotalWithLook, numItemWithLook)
itemsInCart.innerText = numItemWithLook
totalInCart.innerText = '$' + numTotalWithLook


clear()

function clear() {
localStorage.clear()
}





