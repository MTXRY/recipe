/*------------------------------------
// 🍝 MEAL API FROM THEMEALDB
------------------------------------*/
let recipes = [];
let currentPage = 1;
const itemPerPage = 6;
var baseURL = "https://www.themealdb.com/api/json/v1/1/search.php"

document.addEventListener("DOMContentLoaded", ()=>{
    loadSuggestedRecipes
})

function loadSuggestedRecipes(){
    fetch(`${baseURL}?s=chicken`)
    .then (res => res.json())
    .then(data => {
        recipes = data.meals || []
        console.log(recipes);
    })
}
function displayRecipes()
{
    const container= document.getElementById("recipeContainer")
    container.innerHTML = " "

    const start = (currentPage -1) * itemPerPage;
    const paginated = recipes.slice(start, start + itemPerPage)

    paginated.forEach(meals =>{
        const col = document.createElement("div")
        col.className = "col-md mb-3 fade-in"

        let ingredients = "";
        for (let i = 1; i <= 8; i++)
        {
            let ing = meal[`strIngredient${i}`]
            if(ing && ing.trim() !==""){
                ingredients +=`<li> ${ing}</li>`
            }
        }
       
    })
}
