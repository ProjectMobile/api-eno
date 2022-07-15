import { Request, Response } from 'express'
import { prisma } from '../../services/prisma'

class CreateEventController {
    async execute(req: Request, res: Response) {

        try {
            const { namePT, descriptionPT, addressPT, nameES, descriptionES, addressES, date, allDay, endDate, type, lat, long, total_tickets, value, quantity, simpla } = req.body
            var evento: any;
            var dateValue = new Date();
            var url = '';
            if (simpla === undefined) {
            } {
                url = simpla
            }

            if (type === '' || type === null || type === undefined) {
                throw new Error('You must provide a Event type')

            }

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

            let verifier = true;

            let eventCode = Math.floor(Math.random() * 100);

            while (verifier) {

                const event = await prisma.event.findFirst({ where: { eventCode: eventCode } })

                if (event) {
                    eventCode = Math.floor(Math.random() * 100);
                } else {
                    verifier = false
                }
            }


            if (allDay === '' || allDay === null || allDay === undefined) {
                throw new Error('All day not flaged!')
            }

            if (allDay) {

                const ptEvent = await prisma.event.create({
                    data: {
                        name: namePT,
                        description: descriptionPT,
                        date: dateValue,
                        address: addressPT,
                        lat,
                        long,
                        type,
                        allDay,
                        simplaURL: url,
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
                        type,
                        long,
                        simplaURL: url,
                        eventCode,
                        total_tickets,
                        available_tickets: total_tickets,
                        language: 'es'
                    }
                })
                evento = ptEvent;
            } else {

                if (endDate === '' || endDate === null || endDate === undefined) {
                    throw new Error('endDate not informed!')
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
                evento = ptEvent;
            }


            try {

                await prisma.batch.create({
                    data: {
                        numBatch: 1,
                        value,
                        quantity,
                        actualQuantity: quantity,
                        eventId: evento.id
                    }
                })
                return res.status(201).json()
                //HERE IS THE FINAL THING TO DO, IF IT WORKS, IT'S GONNA SEND THE INFOS TO DE DB AND CLOSE.
            } catch (error) {
                await prisma.event.deleteMany({ where: { eventCode } })
            }

            return res.status(400).json({ error: 'Something went wrong' })

        } catch (error) {
            return res.status(400).json({ error: error.message })
        }

    }


}


export { CreateEventController }