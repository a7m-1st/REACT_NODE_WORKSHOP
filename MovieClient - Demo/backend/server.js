const express = require("express");
const app = express();
app.use(express.json()); // Add this line to parse JSON bodies

//Instead of Database
const data = require("./movies.json");
// Define a routes


// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
