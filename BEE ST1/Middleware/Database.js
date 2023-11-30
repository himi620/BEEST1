const mongoose=require("mongoose");


mongoose.connect("mongodb+srv://himi11234:Himi11234@cluster0.cwegxmf.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("Database Connected Successfully"))
.catch((err)=>console.log(err));
