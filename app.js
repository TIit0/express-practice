const express = require("express");
const app = express();
const peopleRouter = require("./routes/people")
const logInRouter = require("./routes/auth")

app.use(express.static("./methods-public"));

//parse urlencoded
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.use("/api/people", peopleRouter);
app.use("/login", logInRouter);







app.listen(5000, () => {
    console.log("Listening on port 5000...")
});
