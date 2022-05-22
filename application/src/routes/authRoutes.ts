import { Router } from "express"
const routes = Router()

routes.post('/login' , (req, res) => {
    const { nombre } = req.body
    req.session.nombreUsuario = nombre;
    res.redirect('/products');
})

routes.get('/logout', (req, res) => {
    const nombre = req.session.nombreUsuario
    req.session.destroy(function (err) {
        res.redirect('/products/logout/'+nombre);
    });
})


export default routes