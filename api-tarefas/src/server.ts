import express from 'express'
import type { Request, Response } from 'express'
import type { Tarefa, NovaTarefa, AtualizarTarefa } from './types/tarefas.js'

let tarefas: Tarefa[] = [{id: 1, titulo: 'Estudar Express', concluida: false}]
let proximoId = 2
const NAO_ENC = { erro: 'Tarefa não encontrada' }

type ReqId = Request<{ id:string }>
type ReqFiltro = Request<{}, {}, {}, {concluida?: string}>
type ReqCriar = Request<{}, {}, NovaTarefa>
type ReqAtualizar = Request<{ id:string }, {}, AtualizarTarefa>

const app = express()
const PORT = 3000

app.use(express.json())

app.get('/tarefas', (req: Request, res: Response) => {
    res.json(
        {
            status: 'ok',
            api: 'tarefas',
        }
    )
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})

