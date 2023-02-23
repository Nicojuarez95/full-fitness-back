import mongoose from "mongoose";

let schema = new mongoose.Schema({
    name: {type: String, required: true},
    detail: {type: String, required: true},
    admin_id: {type: mongoose.Types.ObjectId, ref:'users', required: true}
},{
    timestramps: true
})

let Categoria = mongoose.model('categorias',schema)

export default Categoria