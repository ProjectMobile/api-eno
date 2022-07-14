import { Router } from 'express'
import { ListPartnerController } from '../controller/'
import { authMiddleware } from '../middleware/authMiddleware'

const list = new ListPartnerController()

const partnerRoutes = (router: Router): void => {
    router.get('/api/partners', list.execute.bind(ListPartnerController))
}

export { partnerRoutes }
