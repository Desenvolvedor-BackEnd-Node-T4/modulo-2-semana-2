import type { Request, Response, NextFunction } from 'express'

export function logger(req: Request, res: Response, next: NextFunction): void{
    const inicio = Date.now()
    res.on('finish', () => { // finish é emitido quando a resposta é enviada
        const ms = Date.now() - inicio // tempo de execução em milissegundos
        console.log(`${req.method} ${req.originalUrl} ${res.statusCode} ${ms}ms`)
    })
    next()
}