import { Router } from 'express'
import { listuserController } from '../controller/'

const list = new listuserController()



const userRoutes = (router: Router): void => {
    router.get('/api/user', list.execute.bind(listuserController))
  }
  
  export { userRoutes }
