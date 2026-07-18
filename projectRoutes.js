const express=require("express");
const router=express.Router();
const Project=require("../models/Project");

// Add
router.post("/",async(req,res)=>{
 try{
   const project=await Project.create(req.body);
   res.status(201).json(project);
 }catch(err){res.status(400).json({message:err.message});}
});

// Get all
router.get("/",async(req,res)=>{
 try{
   const projects=await Project.find();
   res.status(200).json(projects);
 }catch(err){res.status(500).json({message:err.message});}
});

// Get by ID
router.get("/:id",async(req,res)=>{
 try{
   const project=await Project.findById(req.params.id);
   if(!project) return res.status(404).json({message:"Project Not Found"});
   res.json(project);
 }catch(err){res.status(500).json({message:err.message});}
});

// Update full
router.put("/:id",async(req,res)=>{
 try{
   const project=await Project.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
   if(!project) return res.status(404).json({message:"Project Not Found"});
   res.json(project);
 }catch(err){res.status(400).json({message:err.message});}
});

// Update status
router.patch("/:id/status",async(req,res)=>{
 try{
   const project=await Project.findByIdAndUpdate(req.params.id,{projectStatus:req.body.projectStatus},{new:true,runValidators:true});
   if(!project) return res.status(404).json({message:"Project Not Found"});
   res.json(project);
 }catch(err){res.status(400).json({message:err.message});}
});

// Delete
router.delete("/:id",async(req,res)=>{
 try{
   const project=await Project.findByIdAndDelete(req.params.id);
   if(!project) return res.status(404).json({message:"Project Not Found"});
   res.json({message:"Project Deleted Successfully"});
 }catch(err){res.status(500).json({message:err.message});}
});

// Get by status
router.get("/status/:status",async(req,res)=>{
 try{
   const projects=await Project.find({projectStatus:req.params.status});
   res.json(projects);
 }catch(err){res.status(500).json({message:err.message});}
});

// Get by technology
router.get("/technology/:technology",async(req,res)=>{
 try{
   const projects=await Project.find({technologyUsed:req.params.technology});
   res.json(projects);
 }catch(err){res.status(500).json({message:err.message});}
});

module.exports=router;
