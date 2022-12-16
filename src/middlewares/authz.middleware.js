const jwt = require('jsonwebtoken')
const constants = require('../utils/constants')

const verifyToken = (req, res, next) => {
    try {
        const authorization = req.header('authorization') // Bearer token_JWT
        let token = undefined
        if(authorization) {
            const parts = authorization.split(' ')
            if(parts.length === 2 && parts[0] === 'Bearer') {
                token = parts[1]
            }
        }

        if(!token) {
            throw new Error('A token is required to access this endpoint')
        }

        const decoded = jwt.verify(token, constants.security.secret)

        req.authenticated = decoded

        next()
    } catch(err) {
        next(err)
    }
}

module.exports = verifyToken