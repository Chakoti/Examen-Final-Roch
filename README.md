# Examen-Final-Roch

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="CSS.css">
    <title>Recettes Communautaires</title>
</head>

<body>
<div class="container-fluid">
    <h4>Répertoire de recettes communautaires</h4>
    <div class="row">
        <div class="ajout">
            <h3>Ajouter une recette</h3>
            <!-- Formulaire d'ajout de recette -->
            <label for="NomRecette" class="form-label">Nom de la recette</label>
            <input type="text" class="form-control" id="NomRecette" name="NomRecette" required>
            <div class="Input">
                <div class="ingredient">
                    <label class="form-label">Ingrédients</label>
                    <!-- Ajout des ingrédients -->
                    <div class="ingredient-inputs">
                        <input type="text" class="form-control ingredient-input" placeholder="Ingrédient 1" required>
                        <input type="text" class="form-control ingredient-input" placeholder="Ingrédient 2" required>
                        <input type="text" class="form-control ingredient-input" placeholder="Ingrédient 3" required>
                        <input type="text" class="form-control ingredient-input" placeholder="Ingrédient 4" required>
                        <input type="text" class="form-control ingredient-input" placeholder="Ingrédient 5" required>

                    </div>
                </div>
                <div class="quantité">
                    <!-- Ajout des quantités -->
                    <div class="quantite-inputs">
                        <input type="text" class="form-control quantite-input" placeholder="Quantité 1" required>
                        <input type="text" class="form-control quantite-input" placeholder="Quantité 2" required>
                        <input type="text" class="form-control quantite-input" placeholder="Quantité 3" required>
                        <input type="text" class="form-control quantite-input" placeholder="Quantité 4" required>
                        <input type="text" class="form-control quantite-input" placeholder="Quantité 5" required>

                    </div>
                </div>
            </div>
            <div id="recipe-form">
                <!-- Ajout des instructions -->
                <label class="para">Instructions</label>
                <br>
                <textarea id="para" name="para" rows="5" cols="100" required></textarea>
            </div>
            <button type="button" id="submitContainer" class="btn btn-primary">Ajouter la recette</button>
        </div>
        <div class="affichage col-md-6">
            <h3>Recettes</h3>
            <!-- Affichage dynamique des recettes -->
            <div id="recipe-list">

                <table class="rows">
                    <tbody id="infoTableBody">
                    <!-- Les lignes du tableau seront ajoutées ici-->
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<script src="MainJS.js"></script>
</body>

</html>

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

.ajout{
    margin-top: 150px;
    margin-left: 100px;

}


.Input{
    width: 100%;
    display: inline-flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    columns: auto;
}

.quantité{
    margin-top: 32px;
}

.affichage{
    margin-top: 150px;
    margin-left:80px;

}

.rows {
    display: flex;
    align-items: center;
    justify-content: space-between;

    border: 1px solid #ccc; /* Border style */

}
