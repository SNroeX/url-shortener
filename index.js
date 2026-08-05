const express = require("express");
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/about", (req, res) => {
    res.send("About Page");
});
app.post("/shorten", (req, res) => {
    res.send("URL received!");
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});