let data = require('../UserData/userData.json')

module.exports = {
    get:(req,res)=>{
        res.status(200).json({
            status:"success",
            data:{
                users:data
            }
        })
    },
    getSingleUser:(req,res)=>{
        let id = req.params["id"]
        let user = data.find(user=>user.id===parseInt(id))
        if (user){
            res.status(200).json({
                status:"success",
                user:user
            })
        }else{
            res.status(400).json({
                status:"error",
                message:" not found!"
            })
        }
    },
    post: (req,res)=>{
        
        let newID = data.length + 1
        const newUser = Object.assign({id:newID},req.body)
        
        data.push(newUser)
        res.status(200).json({
            user:newUser,
            message:"new user creaated"
        })
    },
    patch:(req,res)=>{
        let id = req.params["id"]
        let updateUser = data.find(user=>user.id===parseInt(id))
        if (updateUser){
            Object.assign(updateUser,req.body)
            res.status(201).json({
                status:"succes",
                message:"user updates",
                user:updateUser
              })
        }   else{
            res.status(400).json({
                status:"error",
                message:"No user found!"
            })
        }
     },
     delete:(req,res)=>{

         let id = req.params["id"]
         let deletuser = data.find(user=>user.id===parseInt(id))
         if (deletuser){
            let index = data.indexOf(deletuser)
            data.splice(index,1)
            res.status(200).json({
                sttus:"succes",
                message:"User deleted"
            })
         }else{
            res.status(400).json({
                status:"error",
                message:"user not found!"
            })
         }
     }
}