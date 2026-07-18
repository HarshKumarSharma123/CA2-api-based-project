const mongoose=require("mongoose");

const projectSchema=new mongoose.Schema({
 studentName:{type:String,required:true,default:"Harsh Kumar Sharma"},
 registrationNumber:{type:String,required:true,default:"12418388"},
 projectTitle:{type:String,required:true},
 technologyUsed:{type:String,required:true},
 submissionDate:{type:Date,required:true},
 projectStatus:{
   type:String,
   enum:["Pending","Submitted","Approved","Rejected"],
   default:"Pending"
 }
},{timestamps:true});

module.exports=mongoose.model("Project",projectSchema);
