import Boom from '@hapi/boom'
import { Response, NextFunction } from 'express'
import { RequestWithUserObject, UserJWTPayload } from '../types'
import { verifyAccessToken } from '../util/token.util'
import * as jwt from 'jsonwebtoken'

export function authenticateToken(
    req: RequestWithUserObject,
    res: Response,
    next: NextFunction
) {
    const token =
        req.headers.authorization && req.headers.authorization.split(' ')[1]
    if (!token) {
        throw Boom.badRequest('Missing authentication token')
    }

    try {
        const decodedToken = verifyAccessToken(token)
        console.log(decodedToken, 'this is decoded')
        req.user = decodedToken as UserJWTPayload

        next()
    } catch (error) {
        throw Boom.unauthorized('User is not logged in')
    }
}

export function isAdmin(
    req: RequestWithUserObject,
    res: Response,
    next: NextFunction
) {
    const { user } = req

    if (user && user.isAdmin) {
        console.log(user.isAdmin)
        next()
    } else {
        throw Boom.forbidden('User is not an admin')
    }
}

export function isUser(
    req: RequestWithUserObject,
    res: Response,
    next: NextFunction
) {
    const { user } = req

    if (!user.isAdmin) {
        next()
    } else {
        throw Boom.forbidden('Admin do not have this privilage')
    }
}
