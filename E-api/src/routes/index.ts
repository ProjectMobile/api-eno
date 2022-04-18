import { Router } from "express";
import {userRoutes} from './user.routes'
import {eventRoutes} from './event.routes'

const router = Router()

userRoutes(router)
eventRoutes(router)

export{router}