import express from "express";
import bcrypt from "bcrypt";
import data from "../data.js";
import User from "../models/userModel.js";
import expressAsyncHandler from "express-async-handler";
import {generateToken} from "../utils.js";

const userRouter = express.Router();


userRouter.get('/seed', expressAsyncHandler(async(req, res)=>{
    const createdUsers = await User.insertMany(data.users);
    res.send({createdUsers})
}))

userRouter.post('/singin', expressAsyncHandler(async(req, res)=>{
    const user = await User.findOne({email: req.body.email})
    if(user){
        if (bcrypt.compareSync(req.body.password, user.password)){
            res.send({
                _id: user._id,
                email: user.email,
                password: user.password,
                isAdmin: user.isAdmin,
                token: generateToken(user)
            });
        return
        }
    }
    res.status(401).send({message: 'Неправильное имя или пароль...'})
}))
export default userRouter;