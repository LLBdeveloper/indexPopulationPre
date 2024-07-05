import mongoose from "mongoose";
import UserModel from "./models/usuario.model.js";

const main = async ()=> {
    mongoose.connect("mongodb+srv://LLBdeveloper:admiadmi@cluster0.kdv9gnv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
}
const respuesta = await UserModel.find()
console.log(respuesta)

main()