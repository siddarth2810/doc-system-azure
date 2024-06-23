const JWT = require('jsonwebtoken');

module.exports = async (req, res, next) => {

    try {

        const token = req.headers['authorization'].split(" ")[1];
        JWT.verify(token, process.env.JWT_SECRET, (err, decoded) => {

            if (err) {
                return res.status(200).send({ success: false, message: "unauthorized" });
            }
            else {
                req.body.userId = decoded.id;
                next();
            }
        })

    } catch (err) {

        console.log(err);
        return res.status(401).send({ success: false, message: "auth middleware error" });
    }
}

