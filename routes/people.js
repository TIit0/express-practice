const express = require("express");
const router = express.Router();
const { getPeople, postPeople, putPeople, deletePeople } = require("../controllers/people")


router.get("/", getPeople);

router.post("/", postPeople);

router.post("/postman", postPeople)

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

router.put("/:id", putPeople);

router.delete("/:id", deletePeople);

module.exports = router