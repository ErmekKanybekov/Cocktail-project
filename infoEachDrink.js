// Importing DATA from getData.js-------------------------
import {getData} from "./getData.js";
const data = getData();

// GET 'ID' FORM LOCAL STORAGE
const id = localStorage.getItem("id");

// Declearing Varialbles-----------------------------------
const button = document.querySelector("button");
const container = document.querySelector(".container");

// RENDERING DATA BASED ON THE RETRIVIED 'ID'---------------

data.forEach((element) => {
  if (element.idDrink === id) {
    if (
      (element.strIngredient1 && element.strIngredient2) ||
      element.strIngredient3 ||
      element.strIngredient4 ||
      element.strIngredient5 ||
      element.strIngredient6
    )
      container.innerHTML = `
        <img src="${element.strDrinkThumb}" class="infoIMG" alt="${element.strDrink}">
        <div class="infoDiv">
        <h1 class="drinkInfoName">${element.strDrink}</h1>
        <p class="instruction">${element.strInstructions}</p>
        <p class="ingridients">Ingridients</p>
        <ol>
          <li class="ingridientClass"> ${element.strIngredient1}</li>
          <li class="ingridientClass"> ${element.strIngredient2}</li>
          <li class="ingridientClass"> ${element.strIngredient3}</li>
          <li class="ingridientClass"> ${element.strIngredient4}</li>
          <li class="ingridientClass"> ${element.strIngredient5}</li>
          <li class="ingridientClass"> ${element.strIngredient6}</li>
        </ol>
        </div>
        `;
  }
});

// GO BACK BUTTON------------------------------------------------- 

button.addEventListener('click', goBack)

function goBack() {
  window.history.back()
}

// REMOVE UNDEFINED LIST FOR THE LIST-----------
// IN THE LINE 14 (data.forEach((element)) WE HAVE 6 LI, SOME OF THEM WILL BE UNDEFINED UNTIL, 
// WE REMOVE THEM FROM THE LIST BY USING THE FOLLOWING FUNCTION

const ingredients = document.querySelectorAll(".ingridientClass");

ingredients.forEach((e) => {
  if (e.innerHTML === " undefined") {
    e.remove();
  }
});
