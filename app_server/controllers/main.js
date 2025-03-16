exports.getHomepage = (req, res) => {
    try {
        res.render('index', { 
            title: 'Travlr Home', 
            message: 'Welcome to Travlr!' 
        });
    } catch (error) {
        console.error("Rendering Error:", error);
        res.status(500).send(`<h1>Rendering Error</h1><pre>${error.stack}</pre>`);
    }
};
