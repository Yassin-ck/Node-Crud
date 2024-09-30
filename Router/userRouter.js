const express = require("express")
const userRouter = express.Router()
const userController = require("../Controller/UserController")

userRouter.get("/",userController.get)
userRouter.get("/:id",userController.getSingleUser)
userRouter.post("/",userController.post)
userRouter.patch("/:id",userController.patch)
userRouter.delete("/:id",userController.delete)

module.exports = userRouter;