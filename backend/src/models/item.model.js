const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    item_name: String,
    sell_price: Number,
    is_active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Item', ItemSchema);