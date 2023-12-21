const express = require("express");
const router = express.Router();
const Product = require("./Models/productmodel");

// router.get("/",async(req,res)=>{
//     res.send("butun productlar")
// })
router.post("/", async (req, res) => {
  try {
    const product = req.body;
    const newProduct = new Product(product);
    await newProduct.save();
    res.send(newProduct);
    console.log(product);
  } catch (error) {
    throw error;
  }
});
// butun productlari getirmek
router.get("/", async (req, res) => {
  try {
    const prod = await Product.find();
    res.send(prod);
  } catch (error) {
    console.log(error);
  }
});
// get by id
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    console.log(product);
    res.send(product);
  } catch (error) {
    console.log(error);
  }
});
// delete metod
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteProd = await Product.findByIdAndDelete(id);
    res.send(deleteProd);
  } catch (error) {
    console.log(error);
  }
});
// put metod
router.put("/:id", async (req, res) => {
  try {
    const putId = req.params.id;
    const update = req.body;
    const putIdupdate = await Product.findByIdAndUpdate(putId, update);
    console.log(putIdupdate);
    res.send(putIdupdate);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
