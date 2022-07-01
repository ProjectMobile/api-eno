import { Router } from 'express'
import { AuthController, AuthRefreshController } from '../controller/auth'

const auth = new AuthController();
const refresh = new AuthRefreshController()

const authRoutes = (router: Router): void => {
    router.post('/api/auth', auth.execute.bind(AuthController))
    router.post('/api/auth-refresh', refresh.execute.bind(AuthRefreshController))
}

export { authRoutes }
