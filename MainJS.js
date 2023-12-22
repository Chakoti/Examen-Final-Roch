// Fonction pour ajouter une recette
function addRecipe() {
    // Implémentez ici la logique d'ajout de recette
}

// Fonction pour afficher dynamiquement les recettes
function displayRecipes() {

}

// Document Ready
$(document).ready(function () {
    // Appel des fonctions nécessaires
    addRecipe();
    displayRecipes();
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submitContainer').addEventListener('click', addRecipe);
});

function addRecipe() {
    // Validate inputs
    let recipeName = document.getElementById('NomRecette').value.trim();
    let instructions = document.getElementById('para').value.trim();
    let ingredients = document.querySelectorAll('.ingredient-input');
    let quantities = document.querySelectorAll('.quantite-input');

    if (!recipeName || !instructions || ingredients.length < 2 || quantities.length < 2) {
        alert('Veuillez remplir tous les champs requis.');
        return;
    }

    // Check if quantities are valid numbers
    for (let quantity of quantities) {
        if (isNaN(quantity.value) || parseFloat(quantity.value) <= 0) {
            alert('Les quantités d\'ingrédients doivent être des nombres positifs.');
            return;
        }
    }

    // Create new recipe entry
    let recipeEntry = document.createElement('tr');

    recipeEntry.innerHTML = ``;

    // Append ingredients and quantities
    let ingredientList = '';

    ingredientList += `<b>${recipeName}</b><br> Ingrédients:<br>`
    for (let i = 0; i < ingredients.length; i++) {
        ingredientList += `<li> ${ingredients[i].value} | ${quantities[i].value}</li>`;
    }

    recipeEntry.innerHTML += `<td><ul>${ingredientList}</ul><br></td> <td>Instructions: ${instructions}</td><br> <td><button type="button" class="btn btn-danger" onclick="deleteRecipe(this)">Supprimer</button></td>`

    // Add to recipe list
    document.getElementById('infoTableBody').appendChild(recipeEntry);

    // Clear input fields
    document.getElementById('NomRecette').value = '';
    document.getElementById('para').value = '';
    ingredients.forEach(input => (input.value = ''));
    quantities.forEach(input => (input.value = ''));
}

function deleteRecipe(button) {
    let row = button.closest('tr');
    row.remove();
}


