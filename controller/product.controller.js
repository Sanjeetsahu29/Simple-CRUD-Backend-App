const Product = require('../model/product.model')

const getProduct = async (req,res) =>{
    try{
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    }catch(error){
        res.status(404).json({message:error.message})
    }
}

const getProducts = async (req,res) =>{
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    }catch(error){
        res.status(404).json({message:error.message})
    }
}

const createProduct = async (req,res) =>{
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);
    }catch(error){
        res.status(404).json({message:error.message})
    }
}

const updateProduct = async(req,res)=>{
        const {id} = req.params;
        // const product = req.body;
        const product = await Product.findByIdAndUpdate(id,req.body)
        if(!product){
            return res.status(404).json({message:"Product not Found"})
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
}

const deleteProduct = async(req,res)=>{
        try{
            const {id} = req.params;
            await Product.findByIdAndDelete(id)
            res.status(200).json({messgae:"Deleted Successfully"})
        }catch(error){
            res.status(500).json({message:error.message})
        }
}


module.exports = {
    getProduct,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
}