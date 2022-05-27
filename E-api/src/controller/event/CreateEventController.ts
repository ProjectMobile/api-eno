import { Request, Response } from 'express'
import { prisma } from '../../services/prisma'

class CreateEventController {
    async execute(req: Request, res: Response) {

        try {
            const { namePT, descriptionPT, addressPT, nameES, descriptionES, addressES, date, lat, long, eventCode, total_tickets, value, quantity } = req.body
            var dateValue = new Date();

            if (namePT === '' || nameES === '') {
                throw new Error('You must provide a name')
            }

            if (addressPT === '' || addressES === '') {
                throw new Error('You must provide an address')
            }

            if (date === '' || date === null) {
                throw new Error('You must provide a date')
            }

            try {
                const newDate = new Date(date)
                if (newDate.toString() !== 'Invalid Date') {
                    dateValue = newDate;
                }
            } catch (error) {
                throw new Error('You must provide a valid date')
            }

            if (lat === '' || long === '') {
                throw new Error('You must provide a latitude and longitude')
            }

            if (eventCode === '' || eventCode === null) {
                throw new Error('You must provide an event code')
            } else {
                const event = await prisma.event.findFirst({ where: { eventCode: eventCode } })

                if (event) {
                    throw new Error('This event code already exists')
                }
            }




            const ptEvent = await prisma.event.create({
                data: {
                    name: namePT,
                    description: descriptionPT,
                    date: dateValue,
                    address: addressPT,
                    lat,
                    long,
                    eventCode,
                    total_tickets,
                    available_tickets: total_tickets,
                    language: 'pt'
                }
            })

            const esEvent = await prisma.event.create({
                data: {
                    name: nameES,
                    description: descriptionES,
                    date: dateValue,
                    address: addressES,
                    lat,
                    long,
                    eventCode,
                    total_tickets,
                    available_tickets: total_tickets,
                    language: 'es'
                }
            })

            try {

                const batch = await prisma.batch.create({
                    data: {
                        numBatch: 1,
                        value,
                        quantity,
                        actualQuantity: quantity,
                        eventId: ptEvent.id
                    }
                })
                return res.status(201).json({ ptEvent, esEvent, batch })
                //HERE IS THE FINAL THING TO DO, IF IT WORKS, IT'S GONNA SEND THE INFOS TO DE DB AND CLOSE.
            } catch (error) {
                await prisma.event.deleteMany({ where: { eventCode } })
            }

            //IF IT GOES OUT, IT'S GONNA DELETE THE EVENT AND RETURN AN ERROR
            return res.status(400).json({ error: 'Something went wrong' })

        } catch (error) {
            return res.status(400).json({ error: error.message })
        }



    }


}


export { CreateEventController }