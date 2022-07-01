import { Router } from "express";
import {userRoutes} from './user.routes'
import {eventRoutes} from './event.routes'
import { authRoutes } from "./auth.routes";

const router = Router()

userRoutes(router)
eventRoutes(router)
authRoutes(router)

export{router}