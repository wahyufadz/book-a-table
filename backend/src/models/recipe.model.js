const mongoose = require('mongoose');
/**
* @swagger
*
* definition:
*   recipes:
*     properties:
*       recipe_name:
*         type: string
*       sell_price:
*         type: integer
*       recipe_type:
*         type: string
*       ingredients:
*         type: string
*       is_active:
*         type: boolean
*
*/

const RecipeSchema = mongoose.Schema({
    recipe_name: {
        type: String,
        lowercase: true,
        trim: true,
        minLength: 4
    },
    sell_price: {
        type: Number,
        min: 500,
    },
    recipe_type: {
        type: String,
        enum: [
            'food',
            'beverage',
            'snack'
        ]
    },
    ingredients: [
        {
            ingredient_name: String,
            weight: Number,
            cost: Number,
        }
    ],
    is_active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Recipe', RecipeSchema);