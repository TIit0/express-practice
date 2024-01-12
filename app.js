const express = require("express");
const path = require("path")
const app = express();


// setup static and middleware
app.use(express.static("./public"))
// provides files inside the folder this has an index html, so it automatically loads on get request





// app.get("/", (req, res) => {
//     res.status(200).sendFile(path.join(__dirname, "./navbar-app/index.html"))
//     adding to static assets
//     serverside renderiing    
// });

app.all("*", (req, res) => {
    res.status(404).send("error")
})


app.listen(5000, () => console.log("Listening on port 5000"))