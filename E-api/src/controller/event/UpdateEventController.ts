import { Request, Response } from 'express'
import { Server } from 'http'
import { prisma } from '../../services/prisma'

class UpdateEventController {
    async execute(req: Request, res: Response) {

        try {
            const { id } = req.params

            const event = await prisma.event.findUnique({
                where: {
                    id
                }
            })

            if (!event) {
                throw new Error("Tem não mano")
            }

            const eventsToBeEdited = await prisma.event.findMany({
                where: {
                    eventCode: event.eventCode
                }
            })

            const { namePT, descriptionPT, addressPT, nameES, descriptionES, addressES, date, allDay, endDate, type, lat, long, simpla } = req.body
            var dateValue = new Date();
            var endDateValue = new Date();
            var url = '';
            if (simpla === undefined) {
            } {
                url = simpla
            }

            if (type === '' || type === null || type === undefined || typeof type != 'string') {
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



            if (lat === '' || long === '' || typeof lat !== 'number' || typeof long !== 'number') {
                throw new Error('You must provide a latitude and longitude')
            }

            if (allDay === '' || allDay === null || allDay === undefined) {
                throw new Error('All day not flaged!')
            }

            if (allDay) {
                eventsToBeEdited.forEach(async (event) => {
                    if (event.language == 'pt') {
                        await prisma.event.update({
                            where: {
                                id: event.id
                            }, data: {
                                name: namePT,
                                description: descriptionPT,
                                date: dateValue,
                                address: addressPT,
                                endDate: null,
                                lat,
                                long,
                                type,
                                allDay,
                                simplaURL: url,
                                language: 'pt'
                            }
                        })
                    } else {
                        await prisma.event.update({
                            where: {
                                id: event.id
                            },
                            data: {
                                name: nameES,
                                description: descriptionES,
                                date: dateValue,
                                address: addressES,
                                lat,
                                long,
                                endDate: null,
                                type,
                                allDay,
                                simplaURL: url,
                                language: 'es'
                            }
                        })
                    }
                })
            } else {


                if (endDate === '' || endDate === null || endDate === undefined) {
                    throw new Error('endDate not informed!')
                }

                try {
                    const newDate = new Date(endDate)
                    if (newDate.toString() !== 'Invalid Date') {
                        endDateValue = newDate;
                    }
                } catch (error) {
                    throw new Error('You must provide a valid date')
                }

                eventsToBeEdited.forEach(async (event) => {
                    if (event.language == 'pt') {
                        await prisma.event.update({
                            where: {
                                id: event.id
                            }, data: {
                                name: namePT,
                                description: descriptionPT,
                                date: dateValue,
                                address: addressPT,
                                lat,
                                long,
                                type,
                                endDate: endDateValue,
                                simplaURL: url,
                                language: 'pt'
                            }
                        })
                    } else {
                        await prisma.event.update({
                            where: {
                                id: event.id
                            },
                            data: {
                                name: nameES,
                                description: descriptionES,
                                date: dateValue,
                                address: addressES,
                                lat,
                                endDate: endDateValue,
                                type,
                                long,
                                simplaURL: url,
                                language: 'es'
                            }
                        })
                    }
                })
            }

            return res.status(200).json({ error: 'Updated successfully' })

        } catch (error) {
            return res.status(400).json({ error: error.message })
        }
    }
} export { UpdateEventController }