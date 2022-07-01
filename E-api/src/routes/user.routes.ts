import { Router } from 'express'
import { listuserController } from '../controller/'
import { CreateUserController } from '../controller/user/CreateUserController'

const list = new listuserController()
const create = new CreateUserController()

const userRoutes = (router: Router): void => {
  router.get('/api/user', list.execute.bind(listuserController))
  router.post('/api/user-admin', create.execute.bind(CreateUserController))
}

export { userRoutes }
