import { Router } from "express"
const routes = Router()
import authController from '../controller/authController'
import { isLogued } from '../middlewares/isLogued'

routes.post('/login' , authController.login)
routes.get('/logout', authController.logout)

/**
 * Ejemplo de como proteger una ruta con un Middleware
 */
routes.get('/admin', isLogued, authController.admin)

export default routes