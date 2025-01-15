// import express
import express from "express";
import UserController from "./user.controller.js";
// initiate express router
const UserRouter = express.Router();

const userController = new UserController();

// all the paths to controller methods
UserRouter.post('/signup', userController.signUp)
UserRouter.post('/signin', userController.signIn)

export default UserRouter;