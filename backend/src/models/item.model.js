const mongoose = require('mongoose');
/**
* @swagger
*
* definition:
*   items:
*     properties:
*       item_name:
*         type: string
*       sell_price:
*         type: integer
*       is_active:
*         type: boolean
*
*/

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