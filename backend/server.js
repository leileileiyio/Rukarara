import express from "express";
import data from "./data.js";

const app = express();

app.get("/", function(req, res){
    res.send("Server is ready");
});

const port = process.env.PORT || 5000;

app.get("/api/products", function(req, res){
    res.send(data.products);

});

app.listen(port, function(){
    console.log(`Server at http://localhost:${port}`);
});

// app.listen(port, () => {
//     console.log(`Serve at http://localhost:${port}`);
// });