import { Router } from "express"
const routes = Router()

const validarSesion = (req:any, res:any, next:any) => {
    if (req.session.nombreUsuario) {
        res.redirect('/products')
    } else {
        res.redirect('/api/auth/login');
    }
}

routes.get('/login' , (req, res) => {
    res.render('login')
})

routes.get('/products', (req, res) => {
    res.render('index', {nombre: req.session.nombreUsuario})
})

export default routes