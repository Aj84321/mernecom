    const Users = require('../models/userModel')

const userCtrl = {
    register: async(req,res) =>{
        try{
            const {name,email,password} = req.body;

            const user =  await Users.findOne({email})
        }
        catch(err){
            return res.status(500).json({msg:err.message})
        }
    }
}

module.exports =  userCtrl