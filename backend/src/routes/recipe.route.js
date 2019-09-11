module.exports = (app, apiEndPoint) => {
    const recipes = require('../controllers/recipe.controller.js');

    // Create a new Recipe
    app.post(apiEndPoint + 'recipes', recipes.create);
    /**
    * @swagger
    * /recipes:
    *   post:
    *     summary: Write recipe
    *     description: create new recipe
    *     tags:
    *       - Recipes
    *     produces:
    *       - application/json
    *     responses:
    *       200:
    *         description: create new recipes
    *         schema:
    *           $ref: '#/definitions/recipes'
    */

    // Retrieve all Recipes
    app.get(apiEndPoint + 'recipes', recipes.findAll);
    /**
    * @swagger
    * /recipes:
    *   get:
    *     summary: Get all recipes
    *     description: Returns list of all recipes.
    *     tags:
    *       - Recipes
    *     produces:
    *       - application/json
    *     responses:
    *       200:
    *         description: An array of recipes
    *         schema:
    *           $ref: '#/definitions/recipes'
    */

    // Retrieve a single Recipe with recipeId
    app.get(apiEndPoint + 'recipes/:recipeId', recipes.findOne);
    /**
    * @swagger
    * /recipes/recipeId:
    *   get:
    *     summary: Get recipe
    *     description: Returns recipe by id.
    *     tags:
    *       - Recipes
    *     produces:
    *       - application/json
    *     responses:
    *       200:
    *         description: An array of recipes
    *         schema:
    *           $ref: '#/definitions/recipes'
    */

    // Update a Recipe with recipeId
    app.put(apiEndPoint + 'recipes/:recipeId', recipes.update);

    // Delete a Recipe with recipeId
    app.delete(apiEndPoint + 'recipes/:recipeId', recipes.delete);
}