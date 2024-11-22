const express = require('express');
const app = express();
const PORT = process.env.PORT || 3007;

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send("Hello Everyone!");
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});