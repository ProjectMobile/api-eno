import { Response, Request } from 'express';
import { prisma } from '../../services/prisma';


class listuserController {

    async execute(request: Request, response: Response) {
        try {

            const list = await prisma.user.findMany({})

            return response.status(200).json(list)



        } catch (error) {
            return response.status(400).json('Something went wrong')
        }
    }



}

export { listuserController }