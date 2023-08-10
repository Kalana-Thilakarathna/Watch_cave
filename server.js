import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { ConnectDB } from './Config/db.js';
import userRouter from './Routes/UserRouter.js';
import moviesRouter from './Routes/MoviesRouter.js';
import categoriesRouter from './Routes/CategoriesRouter.js';
import { errorHandler } from './middlewares/errorMiddleware.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
ConnectDB()

app.get('/',(req,res)=>{
    res.send("API is working");
})

app.use("/api/users", userRouter);
app.use("/api/movies", moviesRouter)
app.use("/api/Categories", categoriesRouter)

app.use(errorHandler)

const PORT  = process.env.PORT || 5000;

app.listen(5000,()=>{
    console.log("server is runing on port 5000");
})