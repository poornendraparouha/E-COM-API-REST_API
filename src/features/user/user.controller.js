import UserModel from './user.model.js';

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
            return res.status(200).send('User signed in successfully');
        }
    }
}