const express = require('express');
const path = require('path');
const app = express();


// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Handle requests to root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Set up server to listen on port 3000
const PORT = 3052;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
