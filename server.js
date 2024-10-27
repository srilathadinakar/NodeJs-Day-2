import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoute from './Routers/productRouter.js'

//dotenv config
dotenv.config();

//initialize
const app = express();

// cors middleware
app.use(cors({
    origin:"*",
    credentials:true,
    methods:["GET","POST","PUT","DELETE"],
}));


// Default middleware for req.body
app.use(express.json())


//Default route for cannot get
app.get("/",(req,res)=>{
    res.status(200).send("Welcome to Our API")
});

//custom routes from routers
app.use('/api/product',productRoute)

//port declare
const port =  process.env.PORT || 5000;

//Start the server
app.listen(port,()=>{
    console.log("Server started and running on the port");
})

