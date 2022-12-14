const mongoose=require('mongoose')

const usuarioSchema=mongoose.Schema({
	usuario:{
		type:String,
		require:true
	},
	password: {
		type: String,
		require: true
	},
	nombre: {
		type: String,
		require: true
	},
	apellido: {
		type: String,
		require: true
	},
	dni: {
		type: String,
		require: true
	},
	rpta: {
		type: Boolean,
		default:true
	},
	mensaje: {
		type: String,
		default: "Credenciales autenticas"
	}


})


module.exports=mongoose.model('usuario',usuarioSchema)