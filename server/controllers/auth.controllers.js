import { User } from "../models/user_models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
    const {username , email, password} = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({message: "All fileds are required!!"});
    }

    const user = await User.findOne({email: email});

    if (user) {
        return res.status(400).json({message: "user already exist."});
    }

    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            return res.status(400).json({message: "hashed problem"});
        }

        const newUser = {username, email, password: hashedPassword};

        User.create(newUser);

        return res.status(201).json({message: "user successfully created!!"});
    })
}

export const signin = async (req, res) => {
    const {email, password} = req.body;

    if (!email || !password) {
        return res.status(400).json({message: "All fields are required!!"});
    }

    const user = await User.findOne({email: email});

    if (!user) {
        return res.status(400).json({message: "wrong cradancials"});
    }

    bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err || !isMatch) {
            return res.status(400).json({message: "wrong cradancials"});
        }

        const payloads = {
            userId: user._id,
            username: user.username,
            email: user.email
        };
        const option = {expiresIn: "1d"};

        const token = jwt.sign(payloads, process.env.JWT_SECRET, option);

        return res.status(200).cookie("token", token).json({message: `welcome back ${user.username}`});
    })
}

export const logout = (req, res) => {
    return res.status(200).cookie("token", "", {maxAge: 0}).json({message: "user logout successfully."});
}