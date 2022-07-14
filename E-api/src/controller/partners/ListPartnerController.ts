import { Request, Response } from 'express'
import { prisma } from '../../services/prisma'

class ListPartnerController {
    async execute(req: Request, res: Response) {

        try {
            const partners = await prisma.partner.findMany({
            })

            if (!partners) {
                return res.status(300).json('Não há eventos disponíveis')
            }
            return res.status(200).json(partners)

        } catch (error) {
            return res.status(400).json('Something went wrong')
        }
    }
}

export { ListPartnerController }