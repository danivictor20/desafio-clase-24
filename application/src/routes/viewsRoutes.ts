import { Router } from "express"
const routes = Router()

import generateRandomProds from '../services/faker'
const listProd = generateRandomProds()

routes.get('/products/:log?/:nombre?', (req, res) => {
    const log = req.params.log
    const nombre = req.params.nombre

    res.render('index', {
        data: log == 'logout' ? 'logout' : 'null',
        nombre: log == 'logout' ? nombre : req.session.nombreUsuario,
        listproducts: listProd
    })
})

export default routes