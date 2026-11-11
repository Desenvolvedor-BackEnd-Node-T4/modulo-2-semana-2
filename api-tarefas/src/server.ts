import express from 'express'
import type { Request, Response } from 'express'

const app = express()
const PORT = 3000

app.get('/', (req: Request, res: Response) => {
    res.json(
        {
            status: 'ok',
            api: 'tarefas'
        }
    )
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})