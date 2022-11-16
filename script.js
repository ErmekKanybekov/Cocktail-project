import {
  data
} from './getData.js'


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
    </li>
    `;
  }).join('');
  drinkList.innerHTML = htmlString

  if (drinks.length===0) {
    noResults()
  }
}

loadDrinks()



function addId() {
  document.querySelectorAll('.drinkLI').forEach((each) => {
    each.addEventListener('click', () => {
      localStorage.setItem("id", each.id);
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