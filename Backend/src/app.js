import express from "express";
import {createServer} from "node:http";

import {Server} from "socket.io";

import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";

import cors from "cors";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server=createServer(app);
const io=connectToSocket(server);


app.set("port",(process.env.PORT || 8000));
app.use(cors());
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({limit:"40kb", extended: true}));

app.use("/api/v1/users",userRoutes);
// app.use("/api/v2/users",newUserRoutes);

app.get("/home", (req,res)=>{
    return res.json({"hello":"World"})
} );

const start=async()=>{
    const ConnectionDb=await mongoose.connect("mongodb+srv://zoom:SmHwhFRlwxWRmKEh@cluster0.1swgvvs.mongodb.net/?appName=Cluster0");
    console.log(`MONGO CONNECTED DB Host: ${ConnectionDb.connection.host}`);
    server.listen(app.get("port"), ()=>{
        console.log("LISTENING ON PORT 8000")
    });

}

start();