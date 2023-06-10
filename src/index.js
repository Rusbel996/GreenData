const PORT= 5000
const cors = require("cors")
const express = require("express")
const app = express()

app.use(cors())
app.use(express.json())

require("./conexion")
const userRoute = require("./routes/user")
const productRoute = require("./routes/product");


app.use("/api/user",userRoute)
app.use("/api/product", productRoute);


app.use((error, req, res, next) => {
    console.log("Error name: ", error.name);
    console.log("Error: ", error);
    console.log(error.message);
    return res.status(500).json({ msg: error.message });
  });

app.get("/",(req,res)=>{
    res.send("servidor activado")
})


app.listen(PORT,()=>{
    console.log("el servidor se esta ejecutando en el puerto ",PORT)
})

