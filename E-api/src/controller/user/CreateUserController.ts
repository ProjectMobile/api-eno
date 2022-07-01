import { Request, Response } from 'express'
import { hash } from 'bcryptjs'
import { prisma } from '../../services/prisma'
class CreateUserController {

    async execute(req: Request, res: Response) {

        try {
            const { name, email, password } = req.body

            if (email == '' || email == null) {
                throw new Error('Username is required')
            } else if (password == '' || password == null) {
                throw new Error('password is required')
            }

            const usernameAlreadyExists = await prisma.user.findUnique({
                where: {
                    email
                }
            })



            if (usernameAlreadyExists) {
                throw new Error('email já cadastrado')
            }


            const hashPassword = await hash(password, 8)

            const user = await prisma.user.create({
                data: {
                    name,
                    password: hashPassword,
                    email,
                    roleId: 0
                }
            })

            delete user.id

            return res.status(200).json(user)

        }
        catch (err) {
            return res.status(400).json(err.message)
        }
    }

}

export { CreateUserController }