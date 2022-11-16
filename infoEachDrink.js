const id = localStorage.getItem("id");
const button = document.querySelector('button')
import {
    data
  } from './getData.js'
  

  const container = document.querySelector('.container')


  data.forEach((element)=>{
    if(element.idDrink===id) {
      if (element.strIngredient1 && element.strIngredient2 || element.strIngredient3 || element.strIngredient4 || element.strIngredient5 || element.strIngredient6)
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
        `
    }
  })

  button.addEventListener('click', goBack)

  function goBack () {
    window.history.back()
  }

  const ingredients = document.querySelectorAll('.ingridientClass')

  ingredients.forEach((e)=>{
    if(e.innerHTML===' undefined') {
      e.remove()
    }
  })