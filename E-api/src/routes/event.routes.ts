import { Router } from 'express'
import { ListEventController } from '../controller/'

const list = new ListEventController()


const eventRoutes = (router: Router): void => {
    router.get('/api/event', list.execute.bind(ListEventController))
  }
  
  export { eventRoutes }
