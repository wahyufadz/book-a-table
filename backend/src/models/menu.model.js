const mongoose = require('mongoose');

const MenuSchema = mongoose.Schema({
    Menu: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Menu', MenuSchema);