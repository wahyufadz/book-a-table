const Recipe = require('../models/recipe.model.js');

// Create and Save a new Recipe
exports.create = (req, res) => {

    // Create a Recipe
    const recipe = new Recipe({
        recipe_name: req.body.recipe_name,
        sell_price: req.body.sell_price,
        recipe_type: req.body.recipe_type,
        is_active: req.body.is_active
    });

    // Save Recipe in the database
    recipe.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Recipe."
            });
        });
};

// Retrieve and return all recipes from the database.
exports.findAll = (req, res) => {
    Recipe.find()
        .then(recipes => {
            res.send(recipes);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving recipes."
            });
        });
};

// Find a single recipe with a recipeId
exports.findOne = (req, res) => {
    Recipe.findById(req.params.recipeId)
        .then(recipe => {
            if (!recipe) {
                return res.status(404).send({
                    message: "Recipe not found with id " + req.params.recipeId
                });
            }
            res.send(recipe);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Recipe not found with id " + req.params.recipeId
                });
            }
            return res.status(500).send({
                message: "Error retrieving recipe with id " + req.params.recipeId
            });
        });
};

// Update a recipe identified by the recipeId in the request
exports.update = (req, res) => {

    // Find recipe and update it with the request body
    Recipe.findByIdAndUpdate(req.params.recipeId, {
        recipe_name: req.body.recipe_name,
        sell_price: req.body.sell_price,
        recipe_type: req.body.recipe_type,
        is_active: req.body.is_active

    }, { new: true })
        .then(recipe => {
            if (!recipe) {
                return res.status(404).send({
                    message: "Recipe not found with id " + req.params.recipeId
                });
            }
            res.send(recipe);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Recipe not found with id " + req.params.recipeId
                });
            }
            return res.status(500).send({
                message: "Error updating recipe with id " + req.params.recipeId
            });
        });
};

// Delete a recipe with the specified recipeId in the request
exports.delete = (req, res) => {
    Recipe.findByIdAndRemove(req.params.recipeId)
        .then(recipe => {
            if (!recipe) {
                return res.status(404).send({
                    message: "Recipe not found with id " + req.params.recipeId
                });
            }
            res.send({ message: "Recipe deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Recipe not found with id " + req.params.recipeId
                });
            }
            return res.status(500).send({
                message: "Could not delete recipe with id " + req.params.recipeId
            });
        });
};
