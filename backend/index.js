
import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import matchRoute from "./routes/match.Routes.js";
import NeighborhoodRoute from "./routes/neighborhood.Route.js";
dotenv.config({});
const app = express();


//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions ={
    origin: 'http://localhost:5173',
    credentials: true
}
app.use(cors(corsOptions));
const PORT = process.env.PORT || 3000;

//api's
app.use("/api/v2/user",userRoute);
app.use("/api/v2/match",matchRoute);
app.use("/api/v2/seed", NeighborhoodRoute); //add neighborhodd like saftey, 

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
})