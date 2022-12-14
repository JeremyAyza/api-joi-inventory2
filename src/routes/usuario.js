const express = require('express')
usuarioSchema=require('../models/usuario');

const router=express.Router()



//routes
router.post("/login", (req, res) => {
	const {usuario,password} = usuarioSchema(req.body)
	
	usuarioSchema.findOne({usuario:usuario,password:password})
		.then(data => data ? res.json(data) : res.json({ rpta: false, mensaje: "Credenciales incorrectas" }))
		.catch(error => res.json({ rpta:false,mensaje:"Credenciales incorrectas" }))
})


router.post("/usuario",(req,res)=>{
	const usuario=usuarioSchema(req.body)
	usuario.save()
	.then(data=>res.json(data))
	.catch(error=>res.json({message:error}))
})


router.get("/usuario", (req, res) => {
	usuarioSchema.find()
		.then(data => res.json(data))
		.catch(error => res.json({ message: error }))
})



router.get("/usuario/:cod", (req, res) => {
	const {cod}=req.params
	usuarioSchema.findOne({usuario:cod})
		.then(data => res.json(data))
		.catch(error => res.json({ message: error }))
})



router.put("/usuario/:cod", (req, res) => {
	const { cod } = req.params
	const usua={...req.body}
	delete usua.usuario
	usuarioSchema.updateOne({usuario:cod}, {$set:usua})
		.then(data => res.json(data))
		.catch(error => res.json({ message: error }))
})


router.delete("/usuario/:cod", (req, res) => {
	const { cod } = req.params
	usuarioSchema.deleteOne({ usuario: cod })
		.then(data => res.json(data))
		.catch(error => res.json({ message: error }))
})





module.exports=router