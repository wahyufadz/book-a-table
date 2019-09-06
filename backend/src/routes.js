module.exports = (app) => {
    require('./routes/note.route')(app);

    app.get('/', (req, res) => {
        res.json({ "message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes." });
    });
}