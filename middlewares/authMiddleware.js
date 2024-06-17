const JWT = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    try {

        const token = req.headers['authorization'].split(" ")[1];
        JWT.verify(token, process.env.JWT_SECRET, (err, decoded) => {

            if (err) {
                return res.status(200).send({ success: false, message: "auth failed" });
            }
            else {
                req.body.userId = decoded.id;
                next();
            }

        })

    } catch (err) {

        console.log(err);
        return res.status(401).send({ success: false, message: "auth failed" });
    }


}


module.exports = authMiddleware;
