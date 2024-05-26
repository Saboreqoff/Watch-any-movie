const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (HTML, CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Redirect route
app.get('/redirect', (req, res) => {
    const id = req.query.id;
    if (id) {
        const url = `https://vidsrc.to/embed/movie/${id}/`;
        res.redirect(url);
    } else {
        res.send('ID is required');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
