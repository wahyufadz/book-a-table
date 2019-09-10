const mongoose = require('mongoose');

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
    is_active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Recipe', RecipeSchema);