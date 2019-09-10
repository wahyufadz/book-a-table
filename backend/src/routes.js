module.exports = (app) => {
    const v1 = "/api/v1/"

    require('./routes/item.route')(app, v1);
    require('./routes/recipe.route')(app, v1);

    app.get(v1, (req, res) => {
        res.json({ "message": "Welcome to Book-A-Table API version 1" });
    });
}