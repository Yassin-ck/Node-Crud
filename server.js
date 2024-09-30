const express = require("express")
const app = express()
const userRouter = require("./Router/userRouter")
const bodyParser = require("body-parser")
PORT = 3000


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use("/user",userRouter)


app.listen(PORT, ()=>{
    console.log("Server is running at PORT 3000");
    
})

