import { Request, Response } from 'express'
import { prisma } from '../../services/prisma'

class ListEventController {
    async execute(req: Request, res: Response) {

        try {
            const events = await prisma.event.findMany({

            })

            if (!events) {
                return res.status(300).json('Não há eventos disponíveis')
            }
            res.set('Access-Control-Allow-Origin', '*')
            return res.status(200).json(events)

        } catch (error) {
            return res.status(400).json('Something went wrong')
        }
    }
}

export { ListEventController }