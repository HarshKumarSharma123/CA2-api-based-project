require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const app=express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

app.use("/api/projects",require("./routes/projectRoutes"));

app.get("/",(req,res)=>res.send("Student Project Submission API Running..."));

const PORT=process.env.PORT||5000;
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));
