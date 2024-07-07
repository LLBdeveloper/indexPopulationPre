/** MONGO AVANZADO I - CLASE 16 **/

//Temas de hoy:

//1) Indexacion
//2) Manejo de Populations en MongoDB
//3) PRE


//INDEXACION:  es un técnica o un proceso que se realiza para poder realizar consultas a la Base de Datos mucho más rapido. 

//Esto nos permitirá tener una referencia previa al momento de buscar un documento, con el fin de evitar recorrer toda la coleccion, documento por documento, hasta encontrar dicho valor. 

//Esta referencia se conoce como índice y se crea a partir de uno o varios campos de un documento. Entonces la busqueda se realiza sobre el indice evitando recorrer todos los datos. 

import mongoose from "mongoose";
import UserModel from "./models/usuario.model.js";

const main = async () => {
    try {
        await mongoose.connect("mongodb+srv://LLBdeveloper:admiadmi@cluster0.kdv9gnv.mongodb.net/Tienda?retryWrites=true&w=majority&appName=Cluster0");

        // Verifica si la conexión se realizó correctamente
        console.log('Conexión exitosa a MongoDB');

        const usuarios = await UserModel.find({nombre:"Carlos"}).explain("executionStats");
        console.log('Usuarios encontrados:', usuarios);
    } catch (error) {
        console.error('Error al conectar o buscar usuarios:', error);
    } finally {
        // Cierra la conexión a MongoDB al finalizar
        mongoose.disconnect();
    }
};

main();


