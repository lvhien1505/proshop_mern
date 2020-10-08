const express=require('express');
const cors =require('cors');
const env=require('dotenv');

//import config db
const connectDB=require('./config/db');
//import route
const productRoutes=require('./routes/product');
//import middleware
const {notFound,errorHandler}=require('./middleware/errorMiddleware')



env.config();
connectDB();

const app=express();



app.use(cors());

app.use("/api/products",productRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`);
})