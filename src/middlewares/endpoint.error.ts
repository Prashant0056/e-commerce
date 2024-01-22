import HttpStatus from 'http-status-codes'

import { Response, Request, NextFunction } from 'express'

export function methodNotAllowed(req: Request, res: Response) {
    res.status(HttpStatus.METHOD_NOT_ALLOWED).json({
        error: {
            code: HttpStatus.METHOD_NOT_ALLOWED,
            message: HttpStatus.getStatusText(HttpStatus.METHOD_NOT_ALLOWED),
        },
    })
}
