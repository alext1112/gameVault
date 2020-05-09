// Initialize app variable with express
const express = require('express');

const app = express();

app.get('/', (req,res) => res.send('API Running'));

// Looks for environment variable called port to run on, if no value defaults to 5000;
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));