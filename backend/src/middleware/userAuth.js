const jwt = require('jsonwebtoken')

const userAuth = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (authHeader) {
        jwt.verify(authHeader, process.env.JWT_SECRET, (err, decodedToken) => {
            if (err) {
                return res.status(403).json({
                    success: false,
                    message: 'Nah bruh'
                })
            }
            req.userId = decodedToken.id
            next()
        })
    } else {
        return res.status(401).json({
            success: false,
            message: "Not Authorized"
        })
    }
}
module.exports = {
    userAuth
}