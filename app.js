import express from "express";
import json from "./products.json" assert { type: 'json'}

const app = express();
app.use(express.json());
const products = json.products;

app.get("/", (req,res) => {
    res.status(200).send("vai corinthians");
});

app.route("/products")
    .get((req,res) => {
        res.status(200).json(products);
    })
    .post((req,res) => {
        products.push(req.body);
        res.status(201).send("tá cadastrado certinho paizão");
    })

    function searchProduct(id){
        return products.findIndex(products =>{
            return products.id === Number(id);
        })
    }

    app.get("/products/:id", (req,res) => {
        const id = searchProduct(req.params.id);
        res.status(200).json(products[id]);
    });

    app.put("/products/:id", (req,res) => {
        const id = searchProduct(req.params.id);
        products[id].name = req.body.name;
        products[id].description = req.body.description;
        products[id].price = req.body.price;
        res.status(200).json(products[id]);
    });

    app.delete("/products/:id", (req,res) => {
        const id = searchProduct(req.params.id);
        if(products[id]){
            products.splice(id, 1);
        res.status(200).send ("tá removido paizao");
        } else {
        res.status(200).send ("o produto nao foi encontrado doidin");
        }
    });

    export default app;