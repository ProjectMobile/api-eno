import { Router } from 'express'
import { ListEventController, CreateEventController, DeleteEventController } from '../controller/'
import { authMiddleware } from '../middleware/authMiddleware'

const list = new ListEventController()
const create = new CreateEventController()
const deleteE = new DeleteEventController()

const eventRoutes = (router: Router): void => {
  router.get('/api/event', list.execute.bind(ListEventController))
  router.post('/api/event', authMiddleware, create.execute.bind(CreateEventController))
  router.post('/api/event-delete', authMiddleware, deleteE.execute.bind(DeleteEventController))
}

export { eventRoutes }
