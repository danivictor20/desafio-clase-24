import { Router } from "express"
const routes = Router()
import viewsController from '../controller/viewsController'

routes.get('/products/:log?/:nombre?', viewsController.productsView)

export default routes