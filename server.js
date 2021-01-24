const express= require("express");
const bodyParser= require("body-parser");
const mongoose= require("mongoose");
const shortid= require("shortid");

const app=express();
app.use(bodyParser.json());

const dotenv = require('dotenv');
dotenv.config();

const DB_URL = process.env.DB_URL;
console.log(DB_URL); 

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
} )
.then( () => console.log("connected to DB."))
.catch( err => console.log(err));


const Product = mongoose.model(
    "products",
    new mongoose.Schema({
      _id: { type: String, default: shortid.generate},
      title: String,
      description: String,
      image: String,
      price: Number,
      availableSizes: [String],
      availableCategory:  [String]
    })
  );

app.get("/api/products", async (req,res,err)=>{
    console.log("Getting products ::{}");
    const products = await Product.find({});
    console.log("Products ::{}",products);
    res.send(products);

    if (err) {
      console.log("Error "+err);
    } else {
      console.log('Products retrieved');
    }
});

app.post("/api/products", async (req, res,err) => {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    console.log("Save products ::{}",savedProduct);
    res.send(savedProduct);
    if (err) {
      console.log("Error "+err);
    }
     else {
      console.log('Products save');
    }
  });



  app.delete("/api/products/:id", async (req, res,err) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);

    if (err) {
      console.log("Error "+err);
    } else {
      console.log('Products deleted');
    }
  });


  
const port = 5000;
app.listen(port, () => console.log("serve at http://localhost:"+port));