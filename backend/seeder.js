const mongoose=require('mongoose');
const env=require('dotenv');
const users=require('./data/users');
const products=require('./data/products');
const User=require('./models/user');
const Product=require('./models/product');
const Order=require('./models/product');
const connectDB=require('./config/db');



env.config();
connectDB();


const importData=async ()=>{
    try {
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();

      
        const createdUsers=await User.insertMany(users);

        const adminUser=createdUsers[0]._id; 
        const sampleProduct=products.map(p=>{
            return {...p,user:adminUser}
        })

        await Product.insertMany(sampleProduct);

        console.log("Data Imported !");
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

const destroytData=async ()=>{
    try {
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();


        console.log("Data Destroyed !");
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}


if (process.argv[2]==="-d") {
     destroytData()
} else {
    importData()
}

