const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./model/product.model')
const productRoute = require('./routes/product.route')
//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//Routes
app.use('/api/products',productRoute)

app.get('/',(req,res)=>{
    res.json({msg:"Hello from the NODE API"})
})

// app.get('/api/products',async (req,res)=>{
//     try{
//         const products = await Product.find({});
//         res.status(200).json(products);
//     }catch(error){
//        res.status(500).json({message:error.message}) 
//     }  
// })

// app.get('/api/products/:id',async(req,res)=>{
//     try{
//         const {id} = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product);
//     }catch(error){
//         res.status(500).json({message:error.message})
//     }
// })
// app.post('/api/products',async (req,res)=>{
//     try{
//         const product = await Product.create(req.body);
//         res.status(200).json(product);
//     }catch(error){
//         res.status(500).json({message:error.message})
//     }
// })

// app.put('/api/products/:id',async(req,res)=>{
//     const {id} = req.params;
//     // const product = req.body;
//     const product = await Product.findByIdAndUpdate(id,req.body)
//     if(!product){
//         return res.status(404).json({message:"Product not Found"})
//     }
//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(updatedProduct);
// })

// app.delete('/api/products/:id', async(req,res)=>{
//     try{
//         const {id} = req.params;
//         await Product.findByIdAndDelete(id)
//         res.status(200).json({messgae:"Deleted Successfully"})
//     }catch(error){
//         res.status(500).json({message:error.message})
//     }
// })

mongoose.connect("mongodb+srv://ecb20060:Sanjeet123456@crud.zqbjbv4.mongodb.net/?retryWrites=true&w=majority&appName=crud")
.then(()=>{
    console.log("Connected to DB")
    app.listen(3000,()=>{
        console.log("Server is running on PORT 3000")
    })
}).catch((error)=>{
    console.log("Not connected to DB and error is : "+error.message)
})