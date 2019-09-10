module.exports = (app, apiEndPoint) => {
    const items = require('../controllers/item.controller.js');

    // Create a new Item
    app.post(apiEndPoint + 'items', items.create);

    // Retrieve all Items
    app.get(apiEndPoint + 'items', items.findAll);

    // Retrieve a single Item with itemId
    app.get(apiEndPoint + 'items/:itemId', items.findOne);

    // Update a Item with itemId
    app.put(apiEndPoint + 'items/:itemId', items.update);

    // Delete a Item with itemId
    app.delete(apiEndPoint + 'items/:itemId', items.delete);
}