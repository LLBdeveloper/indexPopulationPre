import mongoose from "mongoose"

const schema = new mongoose.Schema({
    nombre,
    apellido,
    email,
    edad
})

const UserModel = mongoose.model("usuarios", schema)

export default UserModel

