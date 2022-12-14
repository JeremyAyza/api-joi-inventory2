const express=require("express");
const mongoose=require("mongoose")
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 9000

const productoRoutes = require('./routes/producto')
const usuarioRoutes = require('./routes/usuario')


mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to Mongo DB Atlas'))
.catch((err) => console.error(err))




//Middelwares
app.use(express.json())
app.use("/api", productoRoutes)
app.use("/api", usuarioRoutes)














app.listen(PORT, () => {
	console.log('Server listening on port ' + PORT);
})