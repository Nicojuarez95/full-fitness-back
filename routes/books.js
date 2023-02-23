import express from 'express'
import Book from './../models/Book.js'
let router = express.Router();

router.get(//metodo para llamar libros
    '/', //endpoint a concatenar con el enrutador principal
  (req, res)=> { //funcion que se ejecuta cada vez que se llame al endpoint- res es la respuesta que se le muestra al cliente
  res.send('Books')//send envia msj al cliente
    .status(200)//200: exito de lectura;
    }
);

router.post(//metodo para crear libros
    '/',
    async (req,res)=>{
        try{
            let book = await Book.create(req.body)
            return res.send("Se crearon los libros")
        } catch(error){
            console.log(error)
            return res.send("No se crearon los libros")
        }
    }
)

export default router