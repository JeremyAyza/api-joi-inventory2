const mongoose=require('mongoose')

const productoSchema=mongoose.Schema({
	codigo:{
		type:String,
		require:true
	},
	nombre: {
		type: String,
		require: true
	},
	cantidad: {
		type: Number,
		require: true
	},
	emailProveedor:{
		type: String,
		require: true
	},
	marca: {
		type: String,
		require: true
	},
	detalle:{
		type: String,
		require: true
	},
	urlImage:{
		type: String,
		default:"https://cdn-icons-png.flaticon.com/512/756/756940.png"
	}

})


module.exports=mongoose.model('producto',productoSchema)