// Importing DATA from getData.js-------
import {
    getData
} from "./getData.js";
const data = getData();

// Declearing Varialbles-----------------

// TAB (sorting by category)*************
const tabNav = document.querySelector(".tabs");
const tabs = tabNav.querySelectorAll(".tab");

// 
const drinks = document.querySelector(".drinks");

///////////////////////////////////////////////


// Displaying products--------------------

function renderData(arr) {
    for (let item of arr) {
        drinks.innerHTML += `
        <li id="${item.idDrink}" class="drinkLI">
        <img src="${item.strDrinkThumb}" class="photo"/>
        <p class="item-text">Name: ${item.strDrink}</p>
        <p class="item-price">Price: ${item.strPrice}</p>
        </li>`;
} 
}

// Filter items---------------------------

tabs.forEach((li) => {
    li.addEventListener("click", filteredList);
});
let filtered = [];

function filteredList(e) {
    drinks.innerHTML = "";

    let category = e.target.id;

    if (category === "All") {
        filtered = data;
    } else {
        filtered = data.filter((item) => item.strCategory === category);
    }
    renderData(filtered);
    addId();
}

// Search functionality-------------------
const search = document.getElementById("search");

function renderSearch(arr) {
    search.addEventListener("keyup", searchFunc);

    function searchFunc(e) {
        drinks.innerHTML = "";
        if (e.target.value === "") {
            filtered = arr;
        } else {
            filtered = arr.filter((item) => {
                return item.strDrink
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase());
            });
        }
        renderData(filtered);
    }
}

////////// Calling Functions //////////
renderSearch(data);

renderData(data);

// Detail for Each Drink ---- New HTML Page------ SAVE 'ID' IN LOCAL STORAGE

function addId() {
    document.querySelectorAll(".drinkLI").forEach((each) => {
        each.addEventListener("click", () => {
            console.log('each')
            localStorage.setItem("id", each.id);
            window.open("infoEachDrink.html", "_self");
            search.value = "";
        });
    });
}

addId();


// function noResults() {
//     drinks.innerHTML = `
//     <li id="notFound" class="notFound">  
//     <img src='https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-12188.jpg?size=338&ext=jpg'></img>
//     <h1>Nothing found</h1>
//    <p>Sorry, we couldn't find any results matching <span class="redSpan">"${search.value}"</span></p>
//    <p>Keep calm and search again. We have so many other product that you will like!</p>
//     </li>
//     `
//   }

// if (drinks.length===0) {
//     noResults()  
// }