import { Router } from 'express'
import { ListEventController, CreateEventController } from '../controller/'
import { authMiddleware } from '../middleware/authMiddleware'

const list = new ListEventController()
const create = new CreateEventController()

const eventRoutes = (router: Router): void => {
  router.get('/api/event', list.execute.bind(ListEventController))
  router.post('/api/event', authMiddleware, create.execute.bind(CreateEventController))
}

export { eventRoutes }
