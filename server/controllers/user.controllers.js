import { User } from "../models/user_models.js"

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).select("-password");

        if (!user) {
            return res.status(400).json({message: "User not found"});
        }

        return res.status(200).json(user);
    } catch(err) {
        console.log(err.message);
    }
}