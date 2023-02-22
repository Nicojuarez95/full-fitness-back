import mongoose from "mongoose";

let schema = new mongoose.Schema({
    name: {type: String, required: true},
    detail: {type: String, required: true},
    admin_id: {type: String, required: true}
},{
    timestramps: true
})

let Categoria = mongoose.model('categorias',schema)

export default Categoria