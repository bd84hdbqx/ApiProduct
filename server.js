const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose');
const mainRout=require("./routes/index.js")
const bodyParser = require('body-parser')
app.use(bodyParser.json());
require('dotenv').config()



const connet= async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connect")
    } catch (error) {
        throw error
    }
}


// let arr=[{
//     id:1,
//     name:"book1"
// },{
//     id:2,
//     name:"book2"
// },
// {
//     id:3,
//     name:"book4"
// }
// ]
app.get('/', (req, res) => {
  res.send('Hello Worldd!')
})
// // butun productlari getirmek
// app.get('/product', (req, res) => {
//     res.send(arr)
//   })
// // get by id
// app.get('/product/:id', (req, res) => {
//     const Id=req.params.id
//    const elemID=arr.find(elem=>elem.id==Id)
//     res.send(elemID)
//     console.log(elemID)
// })
// // post metod
// app.post('/product',(req,res)=>{
//     const newElem=req.body
//     res.send(arr.push(newElem))
    
// })
// // delete metod 
// app.delete('/product/:id',(req,res)=>{
//     const id=req.params.id
//     arr=arr.filter(elem=>elem.id !=id)
//     res.send(arr)
//     console.log(arr)
    
// })
app.use("/api",mainRout)
app.listen(port, () => {
    connet()
  console.log(`Example app listening on port ${port}`)
})