import UserModel from './user.model.js';
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();
export default class UserController {
    signUp(req, res) {
        const { name, email, password, type } = req.body;
        const user = UserModel.signUp(name, email, password, type);
        res.status(201).send(user)
    }

    signIn(req, res) {
        const result = UserModel.signIn(
            req.body.email, 
            req.body.password
        );
        if (!result) {
            return res.status(400).send('Invalid email or password');
        } else {
            // 1. create jwt token 
            const token = jwt.sign({userID: result.id, email: result.email},process.env.JWT_SECRET,{expiresIn:"1h"})


            // 2. send jwt token
            return res.status(200).send
            (token);
            // ('User signed in successfully');
        }
    }
}