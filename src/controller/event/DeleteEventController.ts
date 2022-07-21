import { Request, Response } from 'express'
import { prisma } from '../../services/prisma'

class DeleteEventController {
    async execute(req: Request, res: Response) {

        try {
            const { id } = req.body
            const event = await prisma.event.findFirst({
                where: {
                    id
                }
            })


            const eventID = await prisma.event.findMany({
                where: {
                    eventCode: event.eventCode
                }
            })

            eventID.forEach(async (e) => {
                await prisma.batch.deleteMany({
                    where: {
                        eventId: e.id
                    }
                })
            })

            await prisma.event.deleteMany({
                where: {
                    eventCode: event.eventCode
                }
            })

            return res.status(200).json('Done!')

        } catch (error) {
            return res.status(400).json('Something went wrong')
        }
    }
}

export { DeleteEventController }