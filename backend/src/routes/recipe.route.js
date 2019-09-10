module.exports = (app, apiEndPoint) => {
    const recipes = require('../controllers/recipe.controller.js');

    // Create a new Recipe
    app.post(apiEndPoint + 'recipes', recipes.create);

    // Retrieve all Recipes
    app.get(apiEndPoint + 'recipes', recipes.findAll);

    // Retrieve a single Recipe with recipeId
    app.get(apiEndPoint + 'recipes/:recipeId', recipes.findOne);

    // Update a Recipe with recipeId
    app.put(apiEndPoint + 'recipes/:recipeId', recipes.update);

    // Delete a Recipe with recipeId
    app.delete(apiEndPoint + 'recipes/:recipeId', recipes.delete);
}