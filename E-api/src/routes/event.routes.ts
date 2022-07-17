import { Router } from 'express'
import { ListEventController, CreateEventController, DeleteEventController, UpdateEventController } from '../controller/'
import { authMiddleware } from '../middleware/authMiddleware'

const list = new ListEventController()
const create = new CreateEventController()
const deleteE = new DeleteEventController()
const update = new UpdateEventController()

const eventRoutes = (router: Router): void => {
  router.get('/api/event', list.execute.bind(ListEventController))
  router.post('/api/event', authMiddleware, create.execute.bind(CreateEventController))
  router.post('/api/event-delete', authMiddleware, deleteE.execute.bind(DeleteEventController))
  router.post('/api/event-update/:id', authMiddleware, update.execute.bind(UpdateEventController))
}

export { eventRoutes }
