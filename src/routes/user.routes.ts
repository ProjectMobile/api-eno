import { Router } from 'express'
import { CreateUserController } from '../controller/'

const create = new CreateUserController()

const userRoutes = (router: Router): void => {
  // router.post('/api/user-admin', create.execute.bind(CreateUserController))
}

export { userRoutes }
