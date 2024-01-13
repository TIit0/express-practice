const express = require("express");
const app = express();
const { products, people } = require("./data")


app.get("/", (req, res) => {
    res.status(201).send("<div><h1>homepage</h1><a href='/api/products'>api</a></div>")
});

app.get("/api/products", (req, res) => {
    const newProductArr = products.map(product => {
        const { image, price, id, name } = product;
        return { image, price, id, name }
    });

    res.status(201).json(newProductArr)
});

app.get("/api/products/:productID", (req, res) => {
    console.log(req.params)
    const resProduct = products.find(product => product.id == Number(req.params.productID));

    if (resProduct) {
        const { image, price, name } = resProduct;
        res.status(201).json({ image, price, name });
    } else {
        res.status(404).send("resource not found")
    }
});

app.listen(5000, () => {
    console.log("Listening on port 5000...")
})