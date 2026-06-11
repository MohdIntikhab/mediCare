import mongoose from "mongoose";

export const connectDB = async()=>{
  await mongoose.connect("mongodb+srv://mohdintikhab432_db_user:Intii7088@cluster0.xu3gdwv.mongodb.net/MediCare")
  .then(()=>{
    console.log("DB Connected")
  })
}