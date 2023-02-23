import express from 'express'
import Categoria from './../models/Categoria.js'
let router = express.Router();

router.get(//metodo para llamar categorias
    '/', //endpoint a concatenar con el enrutador principal
  (req, res)=> { //funcion que se ejecuta cada vez que se llame al endpoint- res es la respuesta que se le muestra al cliente
  res.send('Categorias')//send envia msj al cliente
    .status(200)//200: exito de lectura;
    }
);

router.post(//metodo para crear categorias
    '/',
    async (req,res)=>{
        try{
            let categoria = await Categoria.create(req.body)
            return res.json({
                success: true,
                categoria: categoria,
                id: categoria._id
            })
        } catch(error){
            console.log(error)
            return res.json({
                success: false,
                messagge: "no se pudo crear categoria"
        })
    }
    }
)

export default router