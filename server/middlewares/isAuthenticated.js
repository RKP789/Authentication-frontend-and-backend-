import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(400).json({message: "Not Authenticated!"});
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, payloads) => {
        if (err || !payloads) {
            return res.status(400).json({message: "Not Authenticated!"});
        }

        req.user = payloads;
        next();
    })
}

export default isAuthenticated;