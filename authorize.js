// middleware function 

function authorize( req, res, next) {

    const {user} = req.query;

    if (user === "sience") {
        req.user = {name: "sicence the rat", id: "2"};
        next();
    } else {
       return res.status(401).send("<h1>Unathorized</h1>")
    }

    console.log("authorize")
    next();
}

module.exports = authorize