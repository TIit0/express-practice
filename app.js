const express = require("express");
const app = express();
let { people } = require("./data")

app.use(express.static("./methods-public"));

//parse urlencoded
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());


app.get("/api/people", (req, res) => {
    return res.status(201).json({ success: true, data: people })
});

app.post("/api/people", (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: "please insert a name" })
    } else {
        return res.status(201).json({ success: true, person: name })
    }
});

/* 
---  My attempt at blind put method ---

app.put("/api/people/:id", (req, res) => {
    const { id } = req.params;
    console.log(req.body)
    if (!id || !req.body) {
        return res.status(401).json({
            success: false,
            msg: "bad request"
        })
    }

    const newPeople = people.map(
        person => person.id == id ? person = { id: Number(id), ...req.body } : person = person
    );
    return res.status(201).json({
        success: true,
        data: newPeople
    });
});

*/

app.put("api/people/:id", (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const person = people.find(person => person.id === Number(id));

    if (!person) return res.status(400).json({ success: false, msg: `no person with id:${id}` });

    const newPeople = people.map(person => {
        if (person.id === Number(id)) {
            person.name = name;
        }
    });

    res.status(200).json({ success: true, data: newPeople })
});

app.delete("/api/people/:id", (req, res) => {
    const { id } = req.params;
    const person = people.find(person => person.id == id);

    if (!person) {
        return res.status(404).json({ success: false, msg: `no person with id:${id}` });
    }

    const newPeople = people.filter(person => person.id != id)

    return res.status(201).json({ success: true, deleted: person, data: newPeople });
});

app.listen(5000, () => {
    console.log("Listening on port 5000...")
});