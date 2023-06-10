const userSchema = require("../schemas/user")
const userController = {
    register:async (req,res,next)=>{
        try {
             console.log(req.body)
            const {name,email,password} = req.body
             console.log(name,email,password)
            if(!name || !name || !password){
                return res.status(400).json({msg:"completar todos los campos"})

            }
            const user = await userSchema.findOne({email})
            if(user){
                return res.status(400).json({msg:"correo utilizado"})
            }
            const newUser = new userSchema({name,email,password}) 
            
            const userData = await newUser.save()
            return res.status(200).json({msg:`bienvenido ${name}`})


        } catch (error) {
            next(error)
        }
    }
}

module.exports = userController 